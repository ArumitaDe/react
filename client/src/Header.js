import React, { Component } from 'react';
import './App.css';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';


class Head extends Component {



render() {
        return (
    < div className = "title" >  	
    < Paper zDepth = { 2 } >
    <h1>NY Times Article Search </h1> 
    < Divider / >
    < /Paper> 
    </div>

);


}
}

export default Head;