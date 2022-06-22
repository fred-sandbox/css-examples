import styled from 'styled-components';

const ParallaxStyle = styled.div`
  background: black;
  .parallax {
    background-image: url('https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .image2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://images.unsplash.com/photo-1627483262769-04d0a1401487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
  }

  p {
    margin: 0;
    font-size: 2rem;
    color: white;
    padding: 5px;
    text-align: center;
    width: 100vw;
  }
`;

export const Parallax = () => {
  return (
    <ParallaxStyle>
      <div className='parallax'></div>
      <p>Parallax</p>
      <div className='image2'></div>
    </ParallaxStyle>
  );
};
