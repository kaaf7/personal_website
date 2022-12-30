import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import ContactImage from "../assets/Contact.png";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #efefef;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: none;
`;
const TextContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.h1`
  font-size: 5vh;
  margin-top: 10vh;
  margin-bottom: 0;
`;
const Text = styled.p``;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  margin-left: 5vw;
  height: 100%;
  width: 50%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 1vw;
  font-family: "Lexend", sans-serif;
  &:focus {
    outline: 0.1px solid lightgrey;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 2vh 5vh;
  font-family: "Lexend", sans-serif;
  background-color: #13b8ce;
  color: white;
  cursor: pointer;
  margin-top: 1.5vh;
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 50%;
  background: none;
`;

const RightImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.3);
`;
const Contact = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <LeftSection>
          <TextContainer>
            <Title>Contact Me</Title>
            <Text>hi</Text>
          </TextContainer>

          <Form>
            <Input placeholder="Name" />
            <Input placeholder="Email" /> <Input placeholder="Subject" />{" "}
            <textarea
              type="text"
              placeholder="Message"
              style={{ height: "30vh", padding: "1vw", resize: "none" }}
            />
            <Button>SEND</Button>
          </Form>
        </LeftSection>
        <RightSection>
          <RightImage src={ContactImage} />
        </RightSection>
      </Wrapper>
    </Container>
  );
};

export default Contact;
