# NEED TO ADD (REMOVE THIS SECTION BEFORE FINAL SUBMISSION)
- Managers can add/remove employees with name + phone number to the system.
- Managers can select a couple of employees, and send them a text message from the web-application, to initiate a chat with them. The initial message contains a fixed greeting line from the system and a custom message from the manager. (PARTIALLY DONE JUST NEED TO ADD FIXED GREETING LINE)
- Employees receive the text messages on their phone. The text message contains the content of the manager’s message plus the manager’s name. (PARTIALLY DONE JUST NEED TO ADD MANAGERS NAME)

# SYRG PWA
This project was created for SYRG to add functionality to their already existing app.
This Progressive Web Application was created with backend using graphql built on express, and a
front end using node js. The goal was to create a web-sms chat application that managers can use to communicate with their employees.
Managers have an account on the application that allows them to start conversations with any of their employees and see any ongoing messages other managers within their company have started; and continue them if needed. Managers are able to send a sms from the web application, once employees receive the message on their phone they are able to respond to the manager directly in the text thread and the manager will be able to continue the conversation on the application.

## Requirements
- A [Docker Desktop](https://www.docker.com/products/docker-desktop) downloaded

## Running the Application
1. `cd` into the directory containing the cloned code
2. Run `docker build -t syrgtest` to build the docker image
3. Run `docker run -p 3000:3000 -e github="https://github.com/SYRGAPP/web-text-research --branch newExperiment" -it syrgtest` to create the container
4. Go to localhost:3000 in your web browser to view and interact with the app.

## Front End Components Documentation
- [React](https://reactnavigation.org/docs/en/getting-started.html)
- [Material UI](https://material-ui.com/getting-started/installation/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
## Back End Components Documentation
- [Express](https://expressjs.com/en/4x/api.html)
- [Graphql](https://graphql.org/learn/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- Twillio
## Twillio
This application uses twillio to allow for SMS-Web and Web-SMS messages. More information about the twillio SMS API can be found [here](https://www.twilio.com/docs/sms)
## Known Bugs
- Texts and messages can take up to a minute to load and while loading you cannot move off the page
- Once you click a link leading to an external link you cant press the back button
