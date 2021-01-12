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
                sh 'npm test'
            
            }
        }

        stage('SonarQube Scanner Analysis') {
            environment {
                scannerHome = tool 'sonar_scanner'
            }

            steps{
                echo 'Check Testing'
                agent{ docker { image 'openjdk' }  }
                withSonarQubeEnv('SonarQube') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
                
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build'){

            steps{
                echo "Building Image"
            }

        }
    }
}