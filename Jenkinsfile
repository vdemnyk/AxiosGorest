pipeline {

    agent any

    stages {

        stage('Cleanup') {
            steps {
                cleanWs()
            }
        }        

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t api-tests .'
            }
        }

        stage('Run Tests') {
            steps {
                bat '''
                mkdir allure-results
                
                docker run --rm ^
                -v "%WORKSPACE%\\allure-results:/app/allure-results" ^
                api-tests
                '''
            }
        }
    }

    post {
        always {
            allure(
                includeProperties: false,
                results: [[path: 'allure-results']]
            )
        }
    }
}