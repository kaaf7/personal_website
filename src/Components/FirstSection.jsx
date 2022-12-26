import React from "react";
import styled from "styled-components";
import img from "../assets/Lower_Section.png";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  border-bottom: 1px solid lightgrey;
`;
const TextContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 20%;
  position: relative;
  overflow: hidden;  

`;
const Text = styled.h1`
  color: black;
  font-size: 20vh;
`;

const Wrapper = styled.div`
  width: 100%;

  position: relative;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
  overflow: hidden;
`;

const WelcomImage = styled.img`
  overflow: hidden;
  transform: scale(1.2);
`;

const FirstSection = () => {
  return (
    <Container>
      <Wrapper>
        <WelcomImage src={img}></WelcomImage>
      </Wrapper>
      <TextContainer>
        <Text>HI</Text>
      </TextContainer>
    </Container>
  );
};

export default FirstSection;
