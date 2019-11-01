import React from 'react';
import Message from './Message.js'


class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {this.props.messages.map(message => {
                    return (
                        <li key={message.id} className="list-of-messages">
                            <div className="message-container">
                                <div className={message.sent}>
                                    <div>
                                        {message.text}
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