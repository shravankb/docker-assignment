pipeline {
    agent any

    environment {
                registry = "shravankb/ums-app"
                registryCredential = 'DockerHubCreds'
                dockerImage = ''
    }

    stages {
        stage('Basic Setup') {
            steps {
                echo 'Basic Setup and checks'
                sh 'node --version'
                sh 'npm --version'
                
                echo 'Install Project Dependencies'
                sh 'npm i'

            }
        }
        stage('Unit Testing') {
            steps {

                echo 'UMS Testing-in-Progress'
                sh 'npm run coverage'
            
            }
        }

        stage('SonarQube Scanner Analysis') {
            environment {
                scannerHome = tool 'sonar_scanner'
            }
            
            steps{
                echo 'Check Testing'

                withSonarQubeEnv('SonarQube') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
                
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }

            }
        }
// Todo: from here deployment part 

        stage('Build Docker Image'){
            
            steps{
             
             echo "Building Image"

                withEnv(["ENVIRONMENT=${NODE_ENV}", "PORT=${PORT}", "DBURI=${DBURL}"]){

                echo "Builing in process"
                echo "docker Check"
                sh "docker --version"
                echo "docker-compose Check"
                sh "docker-compose --version"

                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
                echo "Image built"
                }
            }

        }

        stage('Deploying Image to DockerHub'){
            
            steps{
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
// Todo: from here deployment part 

        stage('Connect to Server'){
            steps{
                echo "Connecting to Server"

                sshPublisher(publishers: [sshPublisherDesc(configName: 'EC2-Instance', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''docker stop $(docker ps -a -q) 
docker rm $(docker ps -a -q) 
docker rmi $(docker images -a -q) 
docker-compose --env-file=.env.production -f docker-compose.yml -f docker-compose.prod.yml up -d ''', execTimeout: 300000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'docker-compose.yml, docker-compose.prod.yml')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])

            }

        }


    }
}