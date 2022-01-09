import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 10%;
  width: 100%;
  background-color: crimson;
  color: lightgrey;
  /* display: flex;
  align-items: center; */
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
`;

const Copyright = styled.span`
  padding: 20px;
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
