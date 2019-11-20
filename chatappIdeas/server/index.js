// const express = require('express');
// const bodyParser = require('body-parser');
// const pino = require('express-pino-logger')();
// const client = require('twilio')(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_AUTH_TOKEN
// );
// const MessagingResponse = require('twilio').twiml.MessagingResponse;
//
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(pino);
//
// app.get('/api/greeting', (req, res) => {
//     const name = req.query.name || 'World';
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });
//
// app.listen(3001, () =>
//     console.log('Express server is running on localhost:3001')
// );
//
// app.post('/api/messages', (req, res) => {
//     res.header('Content-Type', 'application/json');
//     client.messages
//         .create({
//             from: process.env.TWILIO_PHONE_NUMBER,
//             to: '+18026815503',
//             body: req.body.text
//         })
//         .then(() => {
//             res.send(JSON.stringify({success:true }));
//         })
//         .catch(err => {
//             console.log(err);
//             res.send(JSON.stringify({success: false}));
//         })
// })
//
// app.post('/sms', (req, res) => {
//     const twiml = new MessagingResponse();
//
//     // Access the message body and the number it was sent from.
//     console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);
//
//     var messagebody = JSON.stringify(req.body.Body);
//     //this.props.receiveMessage(messagebody);
//     res.send(messagebody);
//     res.end(twiml.toString());
// });
//
//
//

const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
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
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Employee" type defines the queryable fields for every Employee in our data source.
    
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
  

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.

  
`;
const convo = [
    {
        sent: 'sent-msg',
        textBody: 'hi'
    },
];

const employees = [
    {
        employeeName: 'Employee One',
        employeeId: 1,
        phoneNumber: '6175435678',
        proPic: './propic.jpeg',
        convo: convo,
    },
    {
        name: 'Employee Two',
        id: 2,
        phoneNumber: '1234567890',
        proPic: './propic.jpeg',
        convo: convo,
    },
];



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
            return convo;
        },
    },
    Message: {
        sent(convo, args, context, info) {
            return convo.sent;
        },
        textBody(convo, args, context, info) {
            return convo.textBody;
        },
    },
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true});

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



app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);



app.post('/api/messages', (req, res) => {
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

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    // Access the message body and the number it was sent from.
    console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);

    var messagebody = JSON.stringify(req.body.Body);
    //this.props.receiveMessage(messagebody);
    res.send(messagebody);
    res.end(twiml.toString());
});

// // //The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`);
// });
