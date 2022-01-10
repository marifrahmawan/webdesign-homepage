import React from 'react';
import styled from 'styled-components';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;

  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    align-items: center;
  }
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;

  @media only screen and (max-width: 480px) {
    font-size: 25px;
    margin-bottom: 5px;
  }
`;

const Type = styled.button`
  padding: 10px;
  margin: 10px 0px;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 10px;
    padding: 5px;
    margin: 0;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0px;
  font-size: 20px;

  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 5px;
    padding: 8px;
    font-size: 12px;
  }
`;

const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>
      </List>
      <Button>Join Now</Button>
      <AnimatedShapes />
    </Container>
  );
};

export default PriceCard;
