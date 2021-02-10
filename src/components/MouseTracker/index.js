import { Component } from 'react';

class MouseTracker extends Component {
  state = {
    x: 0,
    y: 0,
  };

  mouseHandler = (event) => {
    const { clientX, clientY } = event;
    this.setState(() => ({
      x: clientX,
      y: clientY,
    }));
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.mouseHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.mouseHandler);
  }

  render() {
    const { x, y } = this.state;
    return this.props.children({ x, y });
  }
}

export default MouseTracker;
