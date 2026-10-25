pipeline {

    agent any

    stages {               

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t api-tests .'
            }
        }

        stage('Run Tests') {
            steps {
                bat '''
                if exist allure-results rmdir /s /q allure-results
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
