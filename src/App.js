import './reset.css';
import styled from 'styled-components';
import {Panel} from './components/panel';
import {Routes, Route} from 'react-router-dom';
import {Example} from './examples/example';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 150px;
  font-family: 'Arial Rounded MT Bold', sans-serif;
  box-sizing: border-box;
`;

export const App = () =>  {
  return (
    <StyledDiv>
        <Panel/>
        display
        <Routes>
            <Route path='/example1' element={<Example number='1'/>}/>
            <Route path='/example2' element={<Example number='2'/>}/>
            <Route path='/example3' element={<Example number='3'/>}/>
        </Routes>
    </StyledDiv>
  );
};