pipeline {
    agent { docker 'node:12-alpine' }

    tools { nodejs "nodejs"}

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