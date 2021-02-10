import { Component } from 'react';
import SvgSprite from '../components/sprites/CustomSprite';
import styles from './WithIcon.module.css';

const withIcon = (icon, size) => (WrappedComponent) => {
  return class Hoc extends Component {
    render() {
      return (
        <div className={styles.withIconContainer}>
          <SvgSprite icon={icon} size={size} />
          <WrappedComponent name="John" iconName={icon} {...this.props} />
        </div>
      );
    }
  };
};

export default withIcon;
