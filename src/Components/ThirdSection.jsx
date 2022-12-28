import { React, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/Upper_Section.png";
import { gsap, ScrollTrigger } from "gsap/all";
import Technologies from "./Technologies";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;

  border-bottom: 0.5vh solid black;
  /* :hover {
    transition: 0.5s;
    background-color: #ffda2d;
  } */
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
  font-size: 6vh;
  width: 90%;
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
        <Text>I'M A FRONTEND DEVELOPER</Text>
        <Technologies dimension="120"></Technologies>
      </TextContainer>
    </Container>
  );
};

export default ThirdSection;
