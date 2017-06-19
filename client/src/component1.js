import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import './App.css';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 




class Component1 extends Component {


constructor(props) {
    super(props);
    this.state = {Topic: 'abra',StartDate: 'ca',EndDate: 'dabra'};
    //state = {users: []};
  }
  contextTypes: {
    router: React.props.object
  }
render() {
        return ( 
        	<div className ="wrapper">
            
            < Paper zDepth = { 2 }  >
    		<span className= "component-1-span"><TextField  value= {this.state.Topic} onChange={this.handleTopicChange.bind(this)}/></span>
    		<span className= "component-1-span"><TextField value= {this.state.StartDate} onChange={this.handleStartDateChange.bind(this)}/></span>
    		<span className= "component-1-span"><TextField  value= {this.state.EndDate} onChange={this.handleEndDateChange.bind(this)}/></span>
            <RaisedButton label="Submit" onClick={this.handleLogin.bind(this)} style={{margin:12, float:"right"}} />


    		< /Paper> 
            
            
            
         
            
            </div>
           
        );

}

handleTopicChange(e) {
   this.setState({Topic: e.target.value});
}
handleStartDateChange(e) {
   this.setState({StartDate: e.target.value});
}
handleEndDateChange(e) {
   this.setState({password: e.target.value});
}
handleLogin() {
    console.log("StartDate " + this.state.StartDate);
    console.log("EndDate " + this.state.EndDate);
    console.log("Topic " + this.state.Topic);
    
     
}
}

export default Component1;
