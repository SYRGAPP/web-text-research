const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Employee" type defines the queryable fields for every Employee in our data source.

  type Employee {
    name: String
    id: Int
    phoneNumber: String
    proPic: String

  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    employees: [Employee]
  }
`;
//Resolvers tell Apollo Server how to fetch the data associated with a particular type.
const resolvers = {
  Query: {
    employees: () => employees,
  },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });
// const employees = [
//   {
//     name: 'Employee One',
//     id: 1,
//     phoneNumber: '6175435678',
//     proPic: './propic.jpeg',
//   },
//   {
//     name: 'Employee Two',
//     id: 2,
//     phoneNumber: '1234567890',
//     proPic: './propic.jpeg',
//   },
// ];
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

// app.listen(3001, () =>
//     console.log('Express server is running on localhost:3001')
// );

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

// The `listen` method launches a web server.
app.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
