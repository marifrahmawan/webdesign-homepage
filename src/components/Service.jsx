import React, { useState } from 'react';
import styled from 'styled-components';

import How from '../img/how.png';
import AnimatedShapes from './AnimatedShapes';
import MiniCard from './MiniCard';
import Play from '../img/play.png';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555555;
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
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Service = () => {
  const [open, setOpen] = useState(false);

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
      <AnimatedShapes />
    </Container>
  );
};

export default Service;
