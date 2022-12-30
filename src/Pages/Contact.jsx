import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #efefef;
`;
const Wrapper = styled.div`
  margin-top: 20vh;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: #efefef;
`;
const TextContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.h1`
  font-size: 5vh;
`;
const Text = styled.p``;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-left: 5vw;
  height: 100%;
  width: 50%;
  background-color: yellow;
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
  padding: 10px;
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
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 50%;
`;

const RightImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
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
              style={{
                height: "40vh",
                resize: "none",
              }}
            />
            <Button>SEND</Button>
          </Form>
        </LeftSection>
        <RightSection></RightSection>
      </Wrapper>
    </Container>
  );
};

export default Contact;
