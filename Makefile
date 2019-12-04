setup:
	npm install
	
build:
	echo "nothing to build"

run:
	npm run dev
	node index.js

dockertest:
	make setup
	make build
	make run
