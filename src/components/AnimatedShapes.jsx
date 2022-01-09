import React, { Fragment } from 'react';
import styled from 'styled-components';

const Square = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 25s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #ff97af;
  opacity: 0.5;
  position: absolute;
  top: -60px;
  right: 50%;
  z-index: -1;
  animation: circle 25s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(100vh, 50vw);
    }
  }
`;

const Rect = styled.div`
  width: 50px;
  height: 100px;
  background-color: #669966;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  animation: rect 25s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const Tri = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 40px 80px 40px;
  border-color: transparent transparent #007bff transparent;
  position: absolute;
  bottom: 0px;
  right: 70%;
  z-index: -1;
  opacity: 0.5;

  animation: tri 25s linear alternate infinite;

  @keyframes tri {
    to {
      transform: translate(50vw, -100vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <Fragment>
      <Square />
      <Circle />
      <Rect />
      <Tri />
    </Fragment>
  );
};

export default AnimatedShapes;
