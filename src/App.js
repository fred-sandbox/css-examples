import './reset.css';
import styled from 'styled-components';
import {Panel} from './components/panel';

const StyledDiv = styled.div`
  display: flex;
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
    </StyledDiv>
  );
}