import React from 'react';
import logo from './syrglogo.png';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

//Upper Bar Component for the top of the Chat page which contains
//the employee's name and buttons which redirect to employee selection
//page and back to the sign in page.

class Bar extends React.Component {

    render() {
        return (
            <div className="upper-bar">
                <div className="upper-bar-button-container">

                    <Link to ="/users">
                        <button type="button" className="back-to-chats">
                            Back to chats
                        </button>
                    </Link>

                    <Link to ="/">
                        <button type="button" className="sign-out">
                            Sign out
                        </button>
                    </Link>

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
