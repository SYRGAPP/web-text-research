import React from 'react';
import * as Scrivito from 'scrivito';

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <RaisedButton
                        label="Open Drawer"
                        onTouchTap={this.handleToggle}
                    />
                    <Drawer
                        containerStyle={{height: 'calc(100% - 64px)', top: 64}}
                        docked={true}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})
                        }
                    >
                        <AppBar title="AppBar" />
                        <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}
