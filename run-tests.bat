docker run --rm -v ./allure-results:/app/allure-results api-tests

npx allure generate "./allure-results" --clean -o allure-report

npx allure open allure-report