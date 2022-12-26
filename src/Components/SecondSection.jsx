import React from "react";
import styled from "styled-components";
import img from "../assets/Inroduction_flip.png";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  border-bottom: 1px solid lightgrey;
`;
const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex: 1;
  overflow: hidden;

`;
const WelcomImage = styled.img`
  margin-top: 12vh;
  overflow: hidden;
  transform: scale(1.2);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 25%;
  overflow: hidden;
  margin-left: 10vw;
`;
const Text = styled.h1`
  color: black;
  font-size: 15vh;
  margin: 0px;
`;
const SecondSection = () => {
  return (
    <Container>
      <TextContainer>
        <Text>IM </Text>
        <Text>KARIM</Text>
      </TextContainer>
      <Wrapper>
        <WelcomImage src={img}></WelcomImage>
      </Wrapper>
    </Container>
  );
};

export default SecondSection;
