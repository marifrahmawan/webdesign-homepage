import styled from 'styled-components';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntoShape = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(63% 0, 100% 0, 100% 100%, 45% 100%);
  background-color: crimson;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntoShape />
    </Container>
  );
};

export default App;
