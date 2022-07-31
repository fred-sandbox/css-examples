import './reset.css';
import {Routes, Route} from 'react-router-dom';
import styles from './styles/App.module.css';
import {Parallax} from './examples/parallax';
import {Home} from './Home';
import {Panel} from './components/panel';

export const App = () => {
  return (
    <div className={styles.main}>
      <Panel />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/parallax' element={<Parallax />} />
      </Routes>
    </div>
  );
};
