import { React, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/Upper_Section.png";
import { gsap, ScrollTrigger } from "gsap/all";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background-color: #ffda2d;
  border-bottom: .5vh solid black;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  margin-right: 7vw;
  overflow: hidden;
`;
const Text = styled.h1`
  color: black;
  font-size: 8vh;
  margin: 0;
  font-family: "Fredoka One", cursive, sans-serif;

`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
  overflow: hidden;
`;

const WelcomImage = styled.img`
  overflow: hidden;
  margin-top: 10vh;
  transform: scale(0.6);
`;
const ThirdSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sectionAnimation = gsap.context(() => {
      gsap.from(".thirdSectionText", {
        duration: 20,
        x: 500,
        y: 700,
        scrollTrigger: {
          trigger: ".thirdSectionContainer",
          markers: false,
          start: "-800px 500px",
          end: "0px top",
          scrub: true,
        },
        ease: "sine.inOut",
      });

      gsap.to(".thirdSectionImage", {
        duration: 1.5,
        y: -40,
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: ".thirdSectionContainer",
          start: "top bottom",
          toggleActions: "play pause play pause",
        },
        ease: "sine.inOut",
      });
    });
    return () => sectionAnimation.revert();
  }, []);

  return (
    <Container className="thirdSectionContainer">
      <Wrapper className="thirdSectionImage">
        <WelcomImage src={img}></WelcomImage>
      </Wrapper>
      <TextContainer className="thirdSectionText">
        <Text>IM A FRONTEND DEV</Text>
        <Text>AND HERE IS MY WORK</Text>
      </TextContainer>
    </Container>
  );
};

export default ThirdSection;
