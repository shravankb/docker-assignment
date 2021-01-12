pipeline {
    agent any
    tools { nodejs "nodejs"}

    environment {

    }

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