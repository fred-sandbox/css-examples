import {Header} from './header';
import {Button} from './button';
import {Link} from 'react-router-dom';
import styles from '../styles/panel.module.css';

const placeHolderButtons = [{displayName: 'parallax', route: 'parallax'}];

const mapButtons = placeHolderButtons.map((button) => (
  <Link to={button.route} key={button.displayName}>
    <Button {...button} />
  </Link>
));

export const Panel = () => {
  return (
    <div className={styles.panel}>
      <Header />
      {mapButtons}
    </div>
  );
};
