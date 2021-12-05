import React from 'react';
import logo from './logo.svg';
import Header from './Header/Header';
import Button from './Header/Button';

import './App.css';
import { Component } from 'react';

let listNumbers = [];
function getRamdonInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
for (let index = 0; index < 5; index++) {
  listNumbers.push(getRamdonInt(0, 3333));
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: listNumbers,
    };
  }

  handleClick = () => {
    listNumbers.push(getRamdonInt(0, 3333));
    this.setState({ arr: listNumbers });
    document.querySelector('header').style.backgroundColor = 'red';
  };

  render() {
    return (
      <>
        <Header headerTitle="Случайные числа" kol={listNumbers.length} />

        <Button onClick={this.handleClick} text="text" />

        <ol>
          {listNumbers.map((item, i) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
