import React from 'react';
import styled from 'styled-components';
import App from '../img/app.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
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
`;

const Title = styled.span`
  font-size: 70px;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  margin-top: 30px;
  color: #333;
`;
const Description = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 20px;
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
        <Description>
          We help out clients succeed by creating brand identities, digital
          experience, and print materials that comminicate clearly, achieve
          marketing goals and look fantastic.
        </Description>
        <Description>
          We care your business and guarantee you to achieve marketing goals.
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
