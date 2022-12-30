import { React, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/Inroduction_flip.png";
import { gsap, ScrollTrigger } from "gsap/all";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  transition: 0.5s;
  background-color: #efefef;
  border-bottom: 0.5vh solid #313131;
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
  transform: scale(1);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 35%;

  overflow: hidden;
  margin-left: 6vw;
`;
const Text = styled.h1`
  color: #313131;
  font-size: 12vh;
  width: 100%;
  font-family: 'Signika', sans-serif;
  display: flex;
  justify-content: center;
  margin: 0px;
`;
const SecondSection = () => {
  // register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  // create a ref for the root level element (for scoping)
  useEffect(() => {
    let sectionAnimation = gsap.context(() => {
      gsap.to(".secondSectionText", {
        duration: 20,
        x: -200,
        y: 700,
        scrollTrigger: {
          trigger: ".secondSectionContainer",
          markers: false,
          start: "200px 200px",
          end: "bottom top",
          scrub: true,
        },
        ease: "sine.inOut",
      });
      gsap.from(".secondSectionImage", {
        duration: 20,
        x: 150,
        scrollTrigger: {
          trigger: ".secondSectionContainer",
          markers: false,
          start: "-200px 200px",
          end: "bottom top",
          scrub: true,
        },
        ease: "sine.inOut",
      });
    });
    return () => sectionAnimation.revert();
  }, []);
  return (
    <Container className="secondSectionContainer">
      <TextContainer className="secondSectionText">
        <Text>I'M </Text>
        <Text>KARIM</Text>
      </TextContainer>
      <Wrapper>
        <WelcomImage className="secondSectionImage" src={img}></WelcomImage>
      </Wrapper>
    </Container>
  );
};

export default SecondSection;
