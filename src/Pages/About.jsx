import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 5vw;
  margin-right: 5vw;
  display: flex;
  justify-content: center; ;
`;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 50%;
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 50%;
`;
const About = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <LeftSection></LeftSection>
        <RightSection></RightSection>
      </Wrapper>
    </Container>
  );
};

export default About;
