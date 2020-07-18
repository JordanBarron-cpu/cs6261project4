pipeline {
  agent any

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
        sh 'docker run --name=testcontainer -d -v /home/jbarron8/Documents/cs6261project4:/app -p 4200:4200 myimage:testimage'
        sh '/home/jbarron8/Documents/cs6261project4/node_modules/protractor/bin/webdriver-manager update'
        sh 'ng e2e --devServerTarget='
      }
    }
    stage('deploy') {
      steps {
        echo 'Not Yet Implemented'
      }
    }
  }
}
