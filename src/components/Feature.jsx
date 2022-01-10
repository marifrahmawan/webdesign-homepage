import React from 'react';
import styled from 'styled-components';
import App from '../img/app.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  margin: 50px 50px 50px 0px;
  max-width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;

  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  margin-top: 30px;
  color: #333;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #5f5f5f;
  margin-top: 30px;
  text-align: justify;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 50px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <SubTitle>We know that design means good business.</SubTitle>
        <Desc>
          We help out clients succeed by creating brand identities, digital
          experience, and print materials that comminicate clearly, achieve
          marketing goals and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
