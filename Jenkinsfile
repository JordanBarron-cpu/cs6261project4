pipeline {
  agent any

  environment {
    WORKSPACE = '/home/jbarron8/Documents/cs6261project4'
  }

  stages{
    stage('build') {
      steps {
        sh 'npm install'
      }
    }
    stage('test') {
      steps {
        sh 'ng test'
      }
    }
    stage('e2e tests') {
      steps {
        sh 'docker build . --tag myimage:testimage'
        sh 'docker run --name=testcontainer -d -v $WORKSPACE:/app -p 4200:4200 myimage:testimage'
        sh 'npm install protractor'
        sh './node_modules/protractor/bin/webdriver-manager update'
        sh 'ng e2e --devServerTarget='
      }
    }
    stage('deploy') {
      steps {
        echo 'Not Yet Implemented'
      }
    }
  }

  post {
    always {
      sh 'docker stop testcontainer || true'
      sh 'docker rm testcontainer || true'
      sh 'docker images rm myimage:testimage || true'
    }
  }
}
