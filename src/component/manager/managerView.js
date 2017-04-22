import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/Menu';
import {Link} from 'react-router';
import axios from 'axios';
const style = {
  margin: 8,
};
import url from './../config/config.js';

export default class ManagerView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    };
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    };
    handleClose = () => {
        this.setState({open: false})

    };
    handleSignOut = () => {
        localStorage.clear();
    };

    handleProgrammer = () => {
        this.setState({open: false});
        axios.get(url + 'api/programmer').then(function(response) {
            // this.programmerList=response;
            console.log(response.data);
        }).catch(function(error) {
            console.log(error);
        })
    }

    handleTask = () => {
        this.setState({open: false});
        axios.get(url + 'api/task/all').then(function(response) {
            // this.programmerList=response;
            console.log(response.data);
        }).catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <AppBar title="PROJECT MANAGEMENT" onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={< Link to = "/userSignin" > <RaisedButton   label = {JSON.parse(localStorage.getItem('localStore')).user_name +"(sign out)"} style={style} /> </Link>}/>
                <Drawer docked={false} width={300} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                    <Link to="/">
                        <MenuItem onTouchTap={this.handleTask}>Task</MenuItem>
                    </Link>
                    <Divider/>
                    <Link to="/userSignin">
                        <MenuItem onTouchTap={this.handleSignOut}>Sign Out</MenuItem>
                    </Link>
                    <Divider/>

                </Drawer>
                {this.props.children}
            </div>
        );
    }
};
