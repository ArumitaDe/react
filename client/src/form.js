import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';


class InputForm extends Component {

render() {
        return ( 
             < TextField className = "input-field" style = {{width: 170, textAlign:"middle"}} hintText = {this.props.children} / > 
            
        );

       }

}



export default InputForm;
