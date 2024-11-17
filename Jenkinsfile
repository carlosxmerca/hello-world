pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-simple-api .'
            }
        }

        stage('Run API in Docker Container') {
            steps {
                script {
                    sh 'docker stop api-container || true'
                    sh 'docker rm api-container || true'
                    sh 'docker run -d --name api-container -p 3000:3000 my-simple-api'
                }
            }
        }
    }

    post {
        success {
            echo 'Build and deployment succeeded!'
        }
        failure {
            echo 'Build or tests failed!'
        }
    }
}
