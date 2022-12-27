import { React, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/Lower_Section.png";

import { gsap, ScrollTrigger } from "gsap/all";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid black;
`;
const TextContainer = styled.div`
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
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let sectionAnimation = gsap.context(() => {
      gsap.to(".Text", {
        duration: 20,
        x: 100,
        scrollTrigger: {
          trigger: ".Image",
          markers: false,
          start: "200px 200px",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".Image", {
        duration: 20,
        x: -100,
        scrollTrigger: {
          trigger: ".Image",
          markers: false,
          start: "200px 200px",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => sectionAnimation.revert();
  }, []);

  return (
    <Container>
      <Wrapper>
        <WelcomImage className="Image" src={img}></WelcomImage>
      </Wrapper>
      <TextContainer>
        <Text className="Text">HI</Text>
      </TextContainer>
    </Container>
  );
};

export default FirstSection;
