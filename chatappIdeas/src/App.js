import React from 'react';
import './App.css';
import MessageList from './MessageList.js'
import Bar from './Bar.js'
import SendMessageForm from './SendMessageForm.js'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

//Chat page
//Based on code from this video -> https://www.youtube.com/watch?v=jFNHerJqvFw

var MESSAGE_DATA = [
    {
        sent: 'received-msg',
        text: 'Hi'
    },
    {
        sent: 'sent-msg',
        text: 'Hey!'
    },
    {
        sent: 'sent-msg',
        text: 'How are you?'
    },
    {
        sent: 'received-msg',
        text: 'I am great!'
    },
    {
        sent: 'sent-msg',
        text: 'How are you?'
    },
    {
        sent: 'sent-msg',
        text: 'Good.'
    },
    {
        sent: 'received-msg',
        text: 'Lets have a conversation'
    },
    {
        sent: 'sent-msg',
        text: 'Yes'
    },
    {
        sent: 'received-msg',
        text: 'Ok.'
    },
    {
        sent: 'sent-msg',
        text: 'How are you doing?'
    },
    {
        sent: 'received-msg',
        text: 'Im good. you?'
    },
    {
        sent: 'sent-msg',
        text: 'I am good'
    },
    {
        sent: 'sent-msg',
        text:  'Are you?'
    },
    {
        sent: 'received-msg',
        text: 'Yes.'
    },
    {
        sent: 'sent-msg',
        text: 'Ok.'
    },
]



class App extends React.Component {
    //MESSAGE_DATA = this.MESSAGE_DATA;
    constructor() {
        super()
        this.state = {
            messages: MESSAGE_DATA,
            name: '',
            greeting: ''
        };
    }

    sendMessage = (text) =>{
        MESSAGE_DATA.push({
            sent: 'sent-msg',
            text: text
        })
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


        this.setState({state: this.state})

    }

  render() {
    return (
        <div className="App">
            <Bar />
            <MessageList messages={this.state.messages}/>
            <SendMessageForm sendMessage={this.sendMessage}/>
        </div>
    );
  }
}



export default App;
