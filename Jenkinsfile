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
                withCredentials([
                    usernamePassword(credentialsId: 'amazon_cred', usernameVariable: 'USER', passwordVariable: 'PWD')
                ]) {
                    echo "username is ${USER}"
                    echo "password is ${PWD}"
                }
                echo 'testing step'
                echo "user is ${AMAZON_CRED_USR}"
                echo "pwd is ${AMAZON_CRED_PSW}"
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying step'
            }
        }
    }
}
