import { Component } from 'react';

class Hover extends Component {
  render() {
    const { text, onMouseMove } = this.props;
    return <p onMouseMove={onMouseMove}>{text}</p>;
  }
}
export default Hover;
