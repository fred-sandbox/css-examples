import './reset.css';
import styled from 'styled-components';
import {Panel} from './components/panel';
import {Routes, Route} from 'react-router-dom';
import {Parallax} from './examples/parallax';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Arial Rounded MT Bold', sans-serif;
  box-sizing: border-box;
`;

export const App = () => {
  return (
    <StyledDiv>
      <Panel />
      <Routes>
        <Route exact path='/' element={<Parallax />} />
        <Route path='/parallax' element={<Parallax />} />
      </Routes>
    </StyledDiv>
  );
};
