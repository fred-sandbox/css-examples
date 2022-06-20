import {Header} from './header';
import styled from 'styled-components';
import {Button} from './button';

const StyledPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 250px;
  border: 1px solid lightgray;
`;

const placeHolderButtons = [
    {displayName: 'example 1'},
    {displayName: 'example 2'},
    {displayName: 'example 3'}
]

export const Panel = () => {
    return (
        <StyledPanel>
            <Header/>
            {placeHolderButtons.map(button => <Button {...button}></Button>)}
        </StyledPanel>
    )
}