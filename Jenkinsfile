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
	sh 'sudo restart'
        sh 'npm install protractor'
        sh './node_modules/protractor/bin/webdriver-manager update'
        sh 'ng e2e --devServerTarget='
      }
    }
    stage('deploy') {
      steps {
        sh 'docker build . --tag finalimage:deployimage'
        sh 'docker run --name=deploycontainer -d -v $WORKSPACE:/app -p 5000:4200 finalimage:deployimage'
      }
    }
  }

  post {
    always {
      sh 'docker stop testcontainer || true'
      sh 'docker rm testcontainer || true'
      sh 'docker image rm myimage:testimage || true'
      sh 'docker image rm node:12 || true'
    }
  }
}
