import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button';
import DangerButton from './DangerButton';
import './App.css';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
        console.log(moduleA);
      })
      .catch(err => {
        // Handle failure
        console.log('error after clicked!');
      });
  };

  // getGreeting(){
  //   return 'Welcome to React, Yo!';
  // }

  // JavaScript ES5 function
  // function getGreeting() {
  // getGreeting() {
  //   return 'Welcome to JavaScript';
  // }

  // // JavaScript ES6 arrow function with body
  // const getGreeting = () => {
  // getGreeting = () => {
  //   return 'Welcome to JavaScript';
  // }

  // // JavaScript ES6 arrow function without body and implicit return
  // const getGreeting = () =>
  getGreeting = () => 'Welcome to JavaScript, Pat!';

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.getGreeting()}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
        <DangerButton />
        <button onClick={this.handleClick}>Load moduleA</button>
      </div>
    );
  }
}

export default App;
