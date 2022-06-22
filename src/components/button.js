import styled from 'styled-components';

const StyledButton = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    font-size: 1.1rem;
    background: whitesmoke;
  }
`;

export const Button = (props) => {
  return <StyledButton>{props.displayName}</StyledButton>;
};
