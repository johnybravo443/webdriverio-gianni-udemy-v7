pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                echo 'building step'
                echo "branch name is ${BRANCH_NAME}"
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
