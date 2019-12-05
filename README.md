# SYRG PWA
This project was created for SYRG to add functionality to their already existing app.
This Progressive Web Application was created with backend using graphql built on express, and a
front end using node js. The goal was to create a web-sms chat application that managers can use to communicate with their employees.
Managers have an account on the application that allows them to start conversations with any of their employees and see any ongoing messages other managers within their company have started; and continue them if needed. Managers are able to send a sms from the web application, once employees receive the message on their phone they are able to respond to the manager directly in the text thread and the manager will be able to continue the conversation on the application.

## Requirements
- A [Docker Desktop](https://www.docker.com/products/docker-desktop) downloaded
- [Ngrok](https://ngrok.com/download) downloaded onto your computer
- A [Twillo](https://www.twilio.com) account

## Running the Application
1. Create an .env file in the main directory (See below for template)
2. Start the Docker Desktop
3. Once the docker desktop is running run `docker run -p 3000:3000 -p 8080:8080 -p 3001:3001 -p 3774:3774 -it syrgtest`
4. Run `./ngrok http 3001`
5. Copy the forwarding http displayed in the terminal
6. Go to the [twillio phone number console](https://www.twilio.com/console/phone-numbers/PNbd25f9b3fd5d45a108829705ea9fbfff)
7. In the as messaging comes in webhook field paste the forwarding http with "/sms" at the end  
8. Go to localhost:3000 in your web browser to view and interact with the app.

## .env File Template
`SKIP_PREFLIGHT_CHECK=true`
`TWILIO_ACCOUNT_SID='XXXXXX_YOUR_ACCOUNT_SID_XXXXXX'`
`TWILIO_AUTH_TOKEN='XXXXXX_YOUR_AUTH_TOKEN_XXXXXX'`
`TWILIO_PHONE_NUMBER='YOUR_TWILLIO_PHONE_NUMBER'`

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
- Messages page
- Texts and messages can take up to a minute to load and while loading you cannot move off the page
- Once you click a link leading to an external link you cant press the back button
