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
        senderId: 'name2',
        text: 'hi'
    },
]



class App extends React.Component {
    //MESSAGE_DATA = this.MESSAGE_DATA;
    constructor() {
        super()
        this.state = {
            messages: MESSAGE_DATA
        }
    }

    sendMessage = (text) =>{
        MESSAGE_DATA.push({
            senderId: 'name1',
            text: text
        })
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
