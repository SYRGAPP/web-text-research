import React, {Component} from 'react';
import './App.css';
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

var MESSAGE_DATA = [];



const url = `http://localhost:3001/graphql`;
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
const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
};

class App extends React.Component {
    //MESSAGE_DATA = this.MESSAGE_DATA;
    constructor() {
        super()
        this.state = {
            messages: MESSAGE_DATA,
            name: '',
            greeting: ''
        };
        this.getMessageData = this.getMessageData.bind(this);
    }





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



    async getMessageData() {
        const response = await fetch(url, opts);
        const json = await response.json();
        //const data = await this.getMessageData();
        this.setState({messages: json.data.managers.employees.convo})
        this.setState({state: this.state})
    }


    componentDidMount() {

        // if(data===null){
        //
        // } else {
        //     this.setState({messages: data.managers.employees.convo})
        // }
        //this.setState({messages: MESSAGE_DATA})
        this.getMessageData()

        //this.setState({state: this.state})
    }


    render()
    {

            return (
                <div className="App">
                    <div>
                    <script src="/socket.io/socket.io.js"></script>
                    <script>
                        var msg = io('http://localhost:3002/socket');
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




export default App;
