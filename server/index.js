const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const dotenv = require('dotenv').config();
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const {find, filter} = require('lodash');


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Query {
    managers: Manager
  }

  type Employee {
    employeeName: String
    employeeId: Int
    phoneNumber: String
    proPic: String
    convo: [Message]
  }
  type Message {
    sent: String
    textBody: String
  }
  type Manager {
    employees: Employee
  }

`;

//A small sample conversation since we don't have a real database set up
const convo = [
    {
        sent: 'sent-msg',
        textBody: 'hi'
    },
    {
        sent: 'receive-msg',
        textBody: 'hello'
    },
    {
        sent: 'sent-msg',
        textBody: 'whats up'
    },
];

//Another conversation example to query from since there is not a real database set up
const MESSAGE_DATA = [
    {
        sent: 'received-msg',
        textBody: 'Hi'
    },
    {
        sent: 'sent-msg',
        textBody: 'Hey!'
    },
    {
        sent: 'sent-msg',
        textBody: 'How are you?'
    },
    {
        sent: 'received-msg',
        textBody: 'I am great!'
    },
    {
        sent: 'sent-msg',
        textBody: 'How are you?'
    },
    {
        sent: 'sent-msg',
        textBody: 'Good.'
    },
    {
        sent: 'received-msg',
        textBody: 'Lets have a conversation'
    },
    {
        sent: 'sent-msg',
        textBody: 'Yes'
    },
    {
        sent: 'received-msg',
        textBody: 'Ok.'
    },
    {
        sent: 'sent-msg',
        textBody: 'How are you doing?'
    },
    {
        sent: 'received-msg',
        textBody: 'Im good. you?'
    },
    {
        sent: 'sent-msg',
        textBody: 'I am good'
    },
    {
        sent: 'sent-msg',
        textBody:  'Are you?'
    },
    {
        sent: 'received-msg',
        textBody: 'Yes.'
    },
    {
        sent: 'sent-msg',
        textBody: 'Ok.'
    },
]

//Sample employee entries in our 'database'
const employees = [
    {
        employeeName: 'Employee One',
        employeeId: 1,
        phoneNumber: '6175435678',
        proPic: './propic.jpeg',
        convo: MESSAGE_DATA,
    },
    {
        name: 'Employee Two',
        id: 2,
        phoneNumber: '1234567890',
        proPic: './propic.jpeg',
        convo: convo,
    },
];


//Sample Managers
const managers = [
    {
        employees: employees,
    },

]

//Resolvers tell Apollo Server how to fetch the data associated with a particular type.
const resolvers = {
    Query:{
        managers(parent, args, context, info) {
            return find(managers);
        },
    },
    Manager: {
        employees(manager, args, context, info) {
            return find(employees);
        },
    },
    Employee: {
        employeeName(employees, args, context, info) {
            return employees.employeeName;
        },
        employeeId(employees, args, context, info) {
            return employees.employeeId;
        },
        phoneNumber(employees, args, context, info) {
            return employees.phoneNumber;
        },
        proPic(employees, args, context, info) {
            return employees.proPic;
        },
        convo(employees, args, context, info) {
            return MESSAGE_DATA;
        },
    },
    Message: {
        sent(MESSAGE_DATA, args, context, info) {
            return MESSAGE_DATA.sent;
        },
        textBody(MESSAGE_DATA, args, context, info) {
            return MESSAGE_DATA.textBody;
        },
    },
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers});

//Set up the express server here
const app = express();
server.applyMiddleware({ app });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});


//Set up express server on 3001
app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);

//When triggered from SendMessage() in Chat.js this makes a POST request to twilio API to send an SMS containing
//the text information and pushes the new text information to the database
app.post('/api/messages', (req, res) => {
    MESSAGE_DATA.push({
        sent: 'sent-msg',
        textBody: String(req.body.text)
    })
    res.header('Content-Type', 'application/json');
    client.messages
        .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: '+18026815503',
            body: req.body.text
        })
        .then(() => {
            res.send(JSON.stringify({success:true }));
        })
        .catch(err => {
            console.log(err);
            res.send(JSON.stringify({success: false}));
        })
})


//When a text is sent back from the employee, a twilio webhook causes a POST request to be sent.
//This pushes the new text information to the database and the socket emits a message back to
//Chat.js which causes the components to update and render the new message.
//(Requires ngrok to be set up for the correct port and configured on twilio)
app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    MESSAGE_DATA.push({
        sent: 'received-msg',
        textBody: String(req.body.Body)
    })
    // Access the message body and the number it was sent from.
    console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);
    msg.emit('onMessage', {
        everyone: 'in'
        , '/socket': 'will get'
    });
    res.end(twiml.toString());
});


//Set up a socket on 3774
const io = require('socket.io')(3774);
const path = require('path');

//Set socket to listen on 8080 so the front end can update when this emits a message
io.listen(8080, function(){
    console.log('Your server is up and running on Port 3002. Good job!');
});

var msg = io.of('/socket')

