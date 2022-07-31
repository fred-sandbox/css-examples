import {Link} from 'react-router-dom';
import styles from '../styles/header.module.css';

export const Header = () => {
  return (
    <Link to=''>
      <div className={styles.header}>
        <h1>css examples</h1>
      </div>
    </Link>
  );
};
