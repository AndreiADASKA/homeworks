// function Button(props) {
//   return <button {...props.onClick}>{props.btn} </button>;
// }

// export default Button;

import { Component } from 'react';

class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return <button onClick={onClick}>{text}</button>;
  }
}

export default Button;
