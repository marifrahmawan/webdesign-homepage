import { Fragment } from 'react/cjs/react.production.min';
import styled from 'styled-components';
import Feature from './components/Feature';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const IntroShape = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(74% 0, 100% 0, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(55% 0, 0 0, 0 100%, 26% 100%);
  background-color: #ff97af;
`;

const App = () => {
  return (
    <Fragment>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
    </Fragment>
  );
};

export default App;
