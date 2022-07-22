pipeline {
    agent any
    
    environment {
        AMAZON_SECRET = credentials('amazon_secret')
        AMAZON_CRED = credentials('amazon_cred')
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
                echo "user is ${AMAZON_SECRET_USR}"
                echo "pwd is ${AMAZON_SECRET_PSW}"
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying step'
            }
        }
    }
}
