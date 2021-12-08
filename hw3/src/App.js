import './App.css';
import React, { Component } from 'react';
import Button from './Button';

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}

const colorsBtn = [
  'red',
  'blue',
  'yellow',
  'black',
  'orange',
  'chartreuse',
  'gold',
  'grey',
  // 'white',
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: '',
      bgBody: '',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        color: colorsBtn[getRandomNumber(0, colorsBtn.length)],
      });
      if (this.state.color === 'yellow') alert('yellow');
    }, 1000);
  }

  render() {
    return (
      <Button text="Кнопка1" style={{ backgroundColor: this.state.color }} />
    );
  }

  ////////////Второй вариант
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       bgColor: colorsBtn[getRandomNumber(0, colorsBtn.length)],
  //       bgBody:
  //         colorsBtn[getRandomNumber(0, getRandomNumber(0, colorsBtn.length))],
  //       ff: 'black',
  //     });
  //     document.querySelector(
  //       'button'
  //     ).style.backgroundColor = `${this.state.bgColor} `;
  //     document.querySelector(
  //       'body'
  //     ).style.backgroundColor = `${this.state.bgBody} `;

  //     if (this.state.bgColor === 'yellow') alert('yellow');
  //   }, 1000);
  // }

  // render() {
  //   return <Button text="Кнопка2" />;
  // }
  // ////////////////////////////////////////////////////////////
}
