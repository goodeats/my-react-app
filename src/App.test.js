import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jest-enzyme';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Welcome to JavaScript, Pat!</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
  expect(wrapper).toContainReact(welcome);
});
