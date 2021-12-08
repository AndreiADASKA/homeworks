import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { text, style } = this.props;
    return <button style={style}>{text}</button>;
  }
}

export default Button;
