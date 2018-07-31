import React, { Component } from 'react';
import './styles/Button.css';

class Button extends Component {
  render() {
    // return <button>I'm a button</button>;
    return (
      <div className="Button-div">
        <div className="Button" />
      </div>
    );
  }
}

export default Button; // Don’t forget to use export default!
