import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 10%;
  width: 100%;
  background-color: crimson;
  color: lightgrey;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const List = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 30px;

  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const Copyright = styled.span`
  padding: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Mad Dev ©</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
