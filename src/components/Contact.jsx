import React from 'react';
import styled from 'styled-components';

import Map from '../img/map.png';
import Phone from '../img/phone.png';
import Send from '../img/send.png';
import Background from '../img/double-bubble-outline.png';

const Container = styled.div`
  height: 90%;
  background: url(${Background});
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FromContainer = styled.div`
  width: 50%;
  padding-left: 10px;
  margin-left: 50px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-left: 30px;
  }
`;

const Title = styled.h1`
  margin: 30px;
  margin-left: 0;

  @media only screen and (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 50%;
    margin-right: 0;
  }
`;

const Input = styled.input`
  max-width: 100%;
  padding: 20px;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid lightgrey;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 16px;
  }

  @media only screen and (max-width: 480px) {
    padding: 5px;
    height: 100%;
    width: 300px;
    margin-right: 50px;
    margin-bottom: 10px;
  }
`;

const TextArea = styled.textarea`
  max-width: 100%;
  width: 80%;
  height: 100%;
  padding: 20px;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid lightgrey;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 16px;
  }

  @media only screen and (max-width: 480px) {
    padding: 5px;
    height: 100%;
    width: 300px;
    margin-right: 50px;
    margin-bottom: 10px;
  }
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

  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 10px;
    font-size: 14px;
    width: 100px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  margin-left: 200px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FromContainer>
          <Title>
            Question? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FromContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AddressItem>

          <AddressItem>
            <Icon src={Phone} />
            <Text>(+62) 123 4567 8910</Text>
            <Text>(+62) 123 4567 8910</Text>
          </AddressItem>

          <AddressItem>
            <Icon src={Send} />
            <Text>contact@maddev.com</Text>
            <Text>contact@maddev.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
