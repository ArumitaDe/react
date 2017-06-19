import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';

 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 




class Component3 extends Component {



render() {
        return ( 
            <div className ="wrapper">
            
            < Paper zDepth = { 2 }  >
            "apple banana pear"
            < /Paper> 
         
            </div>
           
        );

}
}

export default Component3;
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