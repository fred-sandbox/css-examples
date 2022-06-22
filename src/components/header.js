import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledHeader = styled.header`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;

  h1 {
    font-size: 2rem;
  }

  &:hover {
    background: whitesmoke;
  }
`;

export const Header = () => {
  return (
    <Link to=''>
      <StyledHeader>
        <h1>css examples</h1>
      </StyledHeader>
    </Link>
  );
};
