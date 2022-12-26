import React from "react";
import styled from "styled-components";
import img from "../assets/Upper_Section.png";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  border-bottom: 1px solid lightgrey;

`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  overflow: hidden;
`;
const Text = styled.h1`
  color: black;
  font-size: 8vh;
  margin: 0;
`;

const Wrapper = styled.div`
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
  margin-top: 10vh;
  transform: scale(.95);
`;
const ThirdSection = () => {
  return (
    <Container>
      <Wrapper>
        <WelcomImage src={img}></WelcomImage>
      </Wrapper>
      <TextContainer>
        <Text>IM A FRONTEND DEV</Text>
        <Text>AND HERE IS MY WORK</Text>
      </TextContainer>
    </Container>
  );
};

export default ThirdSection;
