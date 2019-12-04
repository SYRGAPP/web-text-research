setup:
	npm install
	
build:
	echo "nothing to build"

run:
	npm start
	cd server
	node index.js

dockertest:
	make setup
	make build
	make run
