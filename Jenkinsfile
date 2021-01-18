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
            environment {
            registry = "pavithra1026/docker-test"
            registryCredential = 'dockerhub'
            dockerImage = ''
            }
            steps{
             


             echo "Building Image"

                withEnv(["ENVIRONMENT=${NODE_ENV}", "PORT=${PORT}", "DBURI=${DBURL}"]){

                echo "Builing in process"
                echo "docker Check"
                sh "docker --version"
                echo "docker-compose Check"
                sh "docker-compose --version"
                sh "docker build -t ums-app ."

                echo "Image built"
                }
            }

        }

    }
}