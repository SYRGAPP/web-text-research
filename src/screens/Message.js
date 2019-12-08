import React from 'react';

//Component for Message which contains the username of the sender and the text contained in the message

class Message extends React.Component {
    constructor() {
        super()
        this.state = {
            sent: false
        }
    }

    render() {
        return (
            <div className="message">
                <div className="message-username">{this.props.senderId}</div>
                <div className="message-text">{this.props.text}</div>
            </div>
        )
    }
}

export default Message;
