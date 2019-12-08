import React from 'react';
import Message from './Message.js'

//Component for the list of messages in a current conversation
//between manager and employee. This is displayed on the chat
//page

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {this.props.messages.map(message => {
                    return (
                        <li key={this.props.messages.id} className="list-of-messages">
                            <div className="message-container">
                                <div className={message.sent}>
                                    <div>
                                        {message.textBody}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </div>
        );
    }
}

export default MessageList;
