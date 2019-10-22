import React from 'react';
import logo from './syrglogo.png';


class Bar extends React.Component {

    render() {
        return (
            <div className="upper-bar">
                <img src={logo} alt="logo"/>
            </div>
        );
    }
}

export default Bar;