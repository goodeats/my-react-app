// @flow
import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import ReactButton from './Button';
import DangerButton from './DangerButton';
import './App.css';

// https://stephenmann.io/post/how-to-setup-flow-with-create-react-app-and-visual-studio-code/
type Props = {};

class App extends Component<Props> {
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
        <ReactButton />
        <DangerButton />
        <button onClick={this.handleClick} className="btn btn-primary">
          Load moduleA
        </button>
      </div>
    );
  }
}

export default App;
