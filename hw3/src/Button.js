import React, { Component } from 'react';

export default class Button extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.color === 'yellow') {
      alert('yellow');
      return false;
    }
    return true;
  }

  render() {
    const { color } = this.props;
    return <button style={{ backgroundColor: color }}>Кнопка</button>;
  }
}
