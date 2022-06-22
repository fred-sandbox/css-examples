import {Header} from './header';
import styled from 'styled-components';
import {Button} from './button';
import {Link} from 'react-router-dom';

const StyledPanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 250px;
  background: rgba(256, 256, 256, 0.5);
  backdrop-filter: blur(5px);
  border: 1px solid black;
  z-index: 20;
`;

const placeHolderButtons = [{displayName: 'parallax', route: 'parallax'}];

const mapButtons = placeHolderButtons.map((button) => (
  <Link to={button.route} key={button.displayName}>
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
