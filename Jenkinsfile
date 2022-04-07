pipeline {
    agent { docker { image 'node:lastest' } }

    stages {
        stage('Dependencies') {
            steps {
                echo 'Retrieving dependencies..'
				sh 'npm install'
                echo 'Installation completed successfully.'
            }
        }
        stage('Build') {
            steps {
                echo 'Building project..'
				sh 'npm run build'
                echo 'Build completed successfully.'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
				echo 'No tests implemented yet: skipping tests.'
            }
        }
        stage('Deployment') {
            steps {
                echo 'Deploying on firebase'
				echo 'Generating static files..'
				sh 'npm run generate'
				echo 'Static files successfully generated.'
				echo 'Transfering files to deployment folder...'
				sh 'cp -r dist/* /home/yohark/firebase_projects/sammy-lab/public/'
				echo 'Success'
				echo 'Deploying files to firebase...'
				sh 'cd /home/yohark/firebase_projects/sammy-lab/public/ && firebase deploy'
				echo 'Done!'
            }
        }
    }
}