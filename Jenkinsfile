pipeline {
    agent any
    
    environment {
        AMAZON_SECRET = credentials('amazon_secret')
    }
    
    stages {
        stage("build") {
            steps {
                echo 'building step'
                echo "secret is ${AMAZON_SECRET}"
            }
        }
        stage("test") {
            steps {
                echo 'testing step'
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying step'
            }
        }
    }
}
