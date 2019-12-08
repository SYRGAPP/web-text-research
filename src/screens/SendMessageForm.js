import React from 'react';

//Component for the form in which a user inputs a message
//to be sent via SMS to an employee. Located at the bottom
//of the chat page.

class SendMessageForm extends React.Component {

    constructor() {
        super()
        this.state = {
            message: '',
            submitting: false,
            error: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value,
            submitting: true
            })

    }

    handleFocus(e) {
        var label = document.getElementById("message-label");
        label.classList.toggle("enabled");
    }

    // handleSubmit(e) {
    //     e.preventDefault()
    //     this.props.sendMessage(this.state.message)
    //     this.setState({
    //         message: ''
    //     })
    // }

    handleSubmit(event) {
        event.preventDefault();

        this.props.sendMessage(this.state.message);
        this.setState({
             message: '',
             submitting: false
        })



    }

    render() {
        return (
            <label htmlFor="message-form" className="message-label" id="message-label">
                Send a message
            <form onSubmit={this.handleSubmit} className="message-form" id="message-form">
                <input
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleFocus}
                    value={this.state.message}
                    placeholder=""
                    type="text"
                />

            </form>
            </label>
        );
    }
}

export default SendMessageForm;
