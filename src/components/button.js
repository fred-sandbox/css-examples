import PropTypes from 'prop-types';
import styles from '../styles/button.module.css';

export const Button = (props) => {
  return <div className={styles.button}>{props.displayName}</div>;
};

Button.propTypes = {
  displayName: PropTypes.string
};
