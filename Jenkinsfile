pipeline {
    agent any

    stages {
        stage('clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Shreenivas123/simple-maven-java-project.git'
            }
        }
        stage('build') {
            steps {
                // sh 'echo "JAVA_HOME=$JAVA_HOME" && java -version && mvn -version'
                sh 'mvn clean package'
            }
        }
        stage('deploy') {
            steps {
                sh 'sudo cp /var/lib/jenkins/workspace/pipeline/target/beautiful-website-1.0.0.war /home/ubuntu/apache-tomcat-10.1.57/webapps'
            }
        }
    }
}
