import React, { useState } from 'react';
import styled from 'styled-components';

import How from '../img/how.png';
import AnimatedShapes from './AnimatedShapes';
import MiniCard from './MiniCard';
import Play from '../img/play.png';

const Container = styled.div`
  display: flex;
  height: 100vh;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && 'none'};
  margin: 50px 50px 50px 100px;
  max-width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const Video = styled.video`
  display: ${(props) => !props.open && 'none'};
  width: 700px;
  height: 500px;
  margin: auto;

  @media only screen and (max-width: 480px) {
    max-width: 100%;
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
`;

const Right = styled.div`
  width: 50%;

  @media only screen and (min-width: 1400px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 70px;

  @media only screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555555;

  @media only screen and (max-width: 480px) {
    text-align: justify;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
    padding: 10px;
    width: 140px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;

  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 5px;
  background-color: transparent;
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding: 5px;
  border: none;
`;

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <Container>
      <Left>
        <Image open={open} src={How} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple Process to start</Title>
          <Desc>
            We provide digital experience services to startups and small
            business to looking for a partner of their digital media, design &
            development, lead generation and comminication requirements. We work
            with you, not for you. Although we have a great resources.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} /> How it Works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          />
          <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
        </Modal>
      )}
      <AnimatedShapes />
    </Container>
  );
};

export default Service;
