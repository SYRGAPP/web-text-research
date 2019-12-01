setup:
	npm install

build:
	echo "nothing to build"

run:
	npm start

dockertest:
	make setup
	make build
	make run
