import { Component } from 'react';
import styles from './Tooltip.module.css';

class Tooltip extends Component {
  state = {
    isOpen: false,
  };

  show = () => {
    this.setState(() => ({
      isOpen: true,
    }));
  };

  hide = () => {
    this.setState(() => ({
      isOpen: false,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={styles.tooltipWrapper}>
        <button onClick={this.show}>Show tooltip</button>
        <div className={styles.tooltipContainer}>
          {isOpen && (
            <div className={styles.tooltipInner}>
              {this.props.children({
                isOpen,
                show: this.show,
                hide: this.hide,
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Tooltip;
