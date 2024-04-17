pipeline {
    agent any
    environment {
        SECRET_FILE_EXPRESS = credentials('customer-express-env')
        SECRET_FILE_NEST = credentials('customer-nest-env')
        SECRET_FILE_REACT = credentials('customer-react-env')
    }
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage("Create ExpressJS Service ENV") {
            steps {
                dir('express-service') {
                    script {
                        withCredentials([file(credentialsId: "customer-express-env", variable: 'SECRET_FILE_EXPRESS')]) {
                            writeFile file: '.env', text: readFile(file: "${SECRET_FILE_EXPRESS}")
                    }
                }
            }
        }
        stage("Create NestJS Service ENV") {
            steps {
                dir('nest-service') {
                    script {
                        withCredentials([file(credentialsId: "customer-nest-env", variable: 'SECRET_FILE_NEST')]) {
                            writeFile file: '.env', text: readFile(file: "${SECRET_FILE_NEST}")
                    }
                }
            }
        }
        stage("Create ReactJS Service ENV") {
            steps {
                dir('front-end-service') {
                    script {
                        withCredentials([file(credentialsId: "customer-react-env", variable: 'SECRET_FILE_REACT')]) {
                            writeFile file: '.env', text: readFile(file: "${SECRET_FILE_REACT}")
                    }
                }
            }
        }
    }
    stage("Build ExpressJS and NestJS Service") {
        steps {
            parallel (
                "run express" : {
                    dir("express-service") {
                        sh "npm install"
                        sh "npm run dev"
                    }
                },
                "run nest" : {
                    dir("nest-service") {
                        sh "npm install"
                        sh "npm run start"
                    }
                }
                "run react" : {
                    dir("front-end-service") {
                        sh "npm install"
                        sh "npm run dev"
                    }
                }
            )
        }
    }
}