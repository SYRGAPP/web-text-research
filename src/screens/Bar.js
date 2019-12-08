import React from 'react';
import logo from './syrglogo.png';
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";


class Bar extends React.Component {

    render() {
        return (
            <div className="upper-bar">
                <div className="upper-bar-button-container">
                <button
                    component = {Link}
                    to = '/users/'
                    className="back-to-chats"
                    type="submit"
                >
                    Back to chats
                </button>

                <button className="sign-out">
                    Sign out
                </button>
                </div>
                <div className="employee-name-container">
                    <div className="employee-name">
                        Employee Name
                    </div>
                </div>
            </div>
        );
    }
}

export default Bar;
