pipeline {
    agent any


    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Testing') {
            steps {
                sh 'docker images'
            }
        }
        
    }
}