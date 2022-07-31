import './reset.css';
import {Panel} from './components/panel';
import {Routes, Route} from 'react-router-dom';
import {Parallax} from './examples/parallax';
import styles from './styles/App.module.css';

export const App = () => {
  return (
    <div className={styles.main}>
      <Panel />
      <Routes>
        <Route exact path='/' element={<Parallax />} />
        <Route path='/parallax' element={<Parallax />} />
      </Routes>
    </div>
  );
};
