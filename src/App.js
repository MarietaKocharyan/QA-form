import React, { Component } from 'react';
import './App.css';
import PaperSheet from './Components/paperSheet'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>QA form</h1>
         <PaperSheet />
        </header>
      </div>
    );
  }
}

export default App;
