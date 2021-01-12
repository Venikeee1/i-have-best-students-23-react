import { Component } from 'react';

class ComponentWithState extends Component {
  state = {
    clicks: 0,
  };

  increase = (event) => {
    this.setState((prevState) => {
      const clicks = prevState.clicks + 1;

      return {
        clicks,
      };
    });
    console.log(this.state.clicks, '---this.state.clicks');
  };

  render() {
    return (
      <>
        <h1>Click: {this.state.clicks}</h1>
        <button onClick={this.increase}>Click me</button>
      </>
    );
  }
}

export default ComponentWithState;
