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
    stage('e2e') {
      steps {
        echo 'Not Yet Implemented'
      }
    }
    stage('deploy') {
      steps {
        echo 'Not Yet Implemented'
      }
    }
  }
}
