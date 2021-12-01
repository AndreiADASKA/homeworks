import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Button from './Button';

import Hover from './Hover';

class App extends Component {
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  };

  handleClick = () => {
    document.querySelector(
      '#root'
    ).style.backgroundColor = `rgb(${this.getRandomInt(
      0,
      256
    )},${this.getRandomInt(0, 256)},${this.getRandomInt(0, 256)}`;
  };

  hoverMouse = () => {
    alert('алерт алерт алерт алерт ');
  };

  render() {
    return (
      <>
        <Button text="Смена бэграунда" onClick={this.handleClick} />
        <Hover text="Ховер" onMouseMove={this.hoverMouse} />
      </>
    );
  }
}

export default App;
