setup:
	npm install
	
build:
	echo "nothing to build"

run:
	npm run dev

dockertest:
	make setup
	make build
	make run
