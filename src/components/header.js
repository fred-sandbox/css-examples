import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  h1 {
    font-size: 2rem;
  }
`;

export const Header = () => {
    return (
        <StyledHeader>
            <h1>css examples</h1>
        </StyledHeader>
    )
}