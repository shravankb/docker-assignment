pipeline {
    agent any

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

        stage('Build Docker Image'){



            steps{
                echo "Building Image"

                withEnv(["ENVIRONMENT=${NODE_ENV}", "PORT=${PORT}", "DBURI=${DBURL}"]){

                echo "Builing in process"
                
                sh "docker-compose --env-file=.env.production -f docker-compose.yml -f docker-compose.prod.yml build"

                echo "Image built"                    
                }


            }

        }

    }
}