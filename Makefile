setup:
	npm install
	
build:
	echo "nothing to build"

run:
	node server/index.js&
	npm start 

dockertest:
	make setup
	make build
	make run
