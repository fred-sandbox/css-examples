import {Header} from './header';
import styled from 'styled-components';
import {Button} from './button';
import {Link} from 'react-router-dom';

const StyledPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 250px;
  border: 1px solid lightgray;
`;

const placeHolderButtons = [
  {displayName: 'example 1', route: 'example1'},
  {displayName: 'example 2', route: 'example2'},
  {displayName: 'example 3', route: 'example3'}
];

const mapButtons = placeHolderButtons.map((button) => (
  <Link to={button.route}>
    <Button {...button} />
  </Link>
));

export const Panel = () => {
  return (
    <StyledPanel>
      <Header />
      {mapButtons}
    </StyledPanel>
  );
};
