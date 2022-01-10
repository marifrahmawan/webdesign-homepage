import { Fragment } from 'react/cjs/react.production.min';
import styled, { css } from 'styled-components';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Service from './components/Service';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(74% 0, 100% 0, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0, 33% 100%, 0 100%);
  background-color: #4ea3ff;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0, 100% 100%, 74% 100%);
  background-color: crimson;
`;

const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;

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

      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>

      <Container>
        <Price />
        <PriceShape />
      </Container>

      <Container>
        <Contact />
        <Footer />
      </Container>
    </Fragment>
  );
};

export default App;
