import React, {Component} from 'react';
import './Message.css';
import MessageList from './MessageList.js'
import Bar from './Bar.js'
import SendMessageForm from './SendMessageForm.js'
import io from 'socket.io-client';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import {useQuery} from "@apollo/react-hooks";
import gql from 'graphql-tag';


//Chat page
//Based on code from this video -> https://www.youtube.com/watch?v=jFNHerJqvFw

//Array which will store the message data for the conversation between
//manager and employee
var MESSAGE_DATA = [];


//The URL which the graphql queries are made to
const url = `http://localhost:3001/graphql`;
//The format of the query done to get the conversation data
const query = `
    {managers
        {employees 
            {
            employeeName
            phoneNumber
            convo 
            {
            sent
            textBody  
            }
        }
    }
    }
    `
//The JSON formatted to fetch conversation data
const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
};

class Chat extends React.Component {

    constructor() {
        super()
        this.state = {
            messages: MESSAGE_DATA,
            name: '',
            greeting: ''
        };
        this.getMessageData = this.getMessageData.bind(this);
    }

    //Function called to send a POST request to the express server and pass through
    //the text from 'SendMessageForm' to send an SMS to an employee and add the text to the database. It also calls
    //componentDidMount in order to update the MessageList component based on the new text in the database.
    sendMessage = (text) =>{

        var msgtext = {text: text};
        console.log(JSON.stringify({text}))
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(msgtext)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    this.setState({
                        message: '',
                        error: false,
                        submitting: false
                    });
                } else {
                    this.setState({
                        error: true,
                        submitting: false
                    });
                }
            });

        this.componentDidMount();
        this.setState({state: this.state})

    }


    //An async function which grabs the message data in order to
    //display a conversation between employee and manager. It sets the state
    //of messages to the newly updated message data.
    async getMessageData() {
        const response = await fetch(url, opts);
        const json = await response.json();
        this.setState({messages: json.data.managers.employees.convo})
        this.setState({state: this.state})
    }

    //Simply calls getMessageData
    componentDidMount() {
        this.getMessageData()
    }


    render()
    {

            return (
                <div className="Chat">
                    <div>
                    <script src="/socket.io/socket.io.js"></script>
                    <script>
                        var msg = io('http://localhost:8080/socket');
                        msg.on('onMessage', function () {
                        this.componentDidMount()
                    });
                    </script>
                    </div>
                    <Bar/>
                    <MessageList messages={this.state.messages}/>
                    <SendMessageForm sendMessage={this.sendMessage}/>
                </div>
            );
}
}




export default Chat;
