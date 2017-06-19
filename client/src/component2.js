import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';

 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 




class Component2 extends Component {

state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

render() {
        return ( 
            <div className ="wrapper">
            
            < Paper zDepth = { 2 }  >
            {this.state.users.map(user =>
          <div key={user.title}>{user.title}<br/>{user.link}<br/>{user.date}<br/></div>
        )}
            < /Paper> 
         
            </div>
           
        );

}
}

export default Component2;
/*
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

 const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

export default App;
*/