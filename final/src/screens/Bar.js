import React from 'react';
import logo from './syrglogo.png';


class Bar extends React.Component {

    render() {
        return (
            <div className="upper-bar">
                <div>
                <button className="back-to-chats">
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