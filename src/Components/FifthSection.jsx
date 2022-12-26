import React from "react";
import styled from "styled-components";
import img from "../assets/Lower_Section_2.png";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const TextContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow: hidden;
`;
const Text = styled.h1`
  color: black;
  font-size: 15vh;
  position: absolute;
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
  transform: scale(.8);
  z-index: 9999;
  position: relative;
`;
const FifthSection = () => {
  return (
    <Container>
      <Text>Let's Work Together</Text>
      <Wrapper>
        <WelcomImage src={img}></WelcomImage>
      </Wrapper>
    </Container>
  );
};

export default FifthSection;
