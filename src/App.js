import React, { Component } from 'react';
import MoneyInput from './MoneyInput';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h3>The Spec</h3>
        <p className="App-intro">
          We need an input component that takes in a currency value (USD only for now) and automatically normalizes it on blur to an typical format with 2 digits for the cents.  It should round input with more accuracy than that (i.e. "20.555" => "20.56"), and it should attempt to fix invalid input when the intention is obvious (i.e. "20.00 " => "20.00").
        </p>
        <br /><br /><br /><br />
        <h3>The product given to QA:</h3>
        <MoneyInput />
      </div>
    );
  }
}

export default App;
