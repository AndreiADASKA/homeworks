import React, { Component } from 'react';
import Button from './Button';

const COLORS = ['red', 'green', 'blue', 'black', 'pink', 'yellow', 'tomato', 'grey', 'purple'];

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
    };
  }

  componentDidMount() {
    setInterval(() => {
      const randomColorIndex = getRandomNumber(0, COLORS.length - 1);

      const randomColor = COLORS[randomColorIndex];

      this.setState({
        color: randomColor,
      });
    }, 1000);
  }

  render() {
    const { color } = this.state;
    return <Button color={color} />;
  }
}
