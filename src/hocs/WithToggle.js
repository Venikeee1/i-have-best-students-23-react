import { Component } from 'react';

const withToggle = (WrappedComponent) => {
  return class WithToggle extends Component {
    state = {
      isOpen: false,
    };

    toggle = () =>
      this.setState((prevState) => ({ isOpen: !prevState.isOpen }));

    render() {
      const { isOpen } = this.state;
      const { iconName } = this.props;

      return (
        <>
          <button type="button" onClick={this.toggle}>
            {this.state.isOpen ? 'Hide' : 'Show'} : {iconName}
          </button>

          {isOpen && <WrappedComponent {...this.props} toggle={isOpen} />}
        </>
      );
    }
  };
};

export default withToggle;
