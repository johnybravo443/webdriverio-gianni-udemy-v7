pipeline {
    agent any
    
    environment {
        AMAZON_CRED = credentials('amazon_cred')
    }
    
    stages {
        stage("build") {
            steps {
                echo 'building step'
                echo "branch name is ${AMAZON_CRED}"
            }
        }
        stage("test") {
            steps {
                echo 'testing step'
                echo "branch name is ${env.BRANCH_NAME}"
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying step'
            }
        }
    }
}
