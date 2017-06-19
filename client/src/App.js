import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Head from './Header';
import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';
import './App.css';
 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();



class App extends Component {



render() {
        return ( < MuiThemeProvider >
        	<div >
        	<div className="div1">
            <Head />
            </div>
            <div className="div2">
            
            <Component1 style={{margin : 20 }}/>
            <Component2 style={{margin : 20 }}/>
            <Component3 style={{margin : 20 }}/>
            </div>
            <div className="div3">
            </div>
            <div className="div4">
            </div>
            </div>
            < /MuiThemeProvider>
        );

}
}

export default App;
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