import React, { Component } from 'react';
import './App.css';

import router from  "./router";
import Nav from './components/Nav/Nav';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav></Nav>

        <div className="App-header">
            { router }
        </div>
      </div>
    );
  }
}

export default App;
