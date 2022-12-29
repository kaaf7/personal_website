import { React, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/Lower_Section.png";
import { gsap, ScrollTrigger } from "gsap/all";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background-color: #efefef;
  border-bottom: 0.5vh solid #313131;
  transition: 0.5s;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 15%;
  margin-right: 20vh;
  position: relative;
  overflow: hidden;
  background-color: none;
  z-index: 1;
`;
const Text = styled.h1`
  color: #313131;
  font-size: 20vh;
  position: relative;
  margin-bottom: 10vh;
  background-color: none;
  font-family: "Fredoka One", cursive, sans-serif;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`;

const WelcomImage = styled.img`
  overflow: hidden;
  transform: scale(1);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  overflow-x: hidden;
  z-index: 3;
`;

const FirstSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let sectionAnimation = gsap.context(() => {
      gsap.to(".arrow", {
        duration: 1.5,
        y: -20,
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: ".firstSectionContainer",
          start: "top bottom",
          toggleActions: "play pause play pause",
        },
        ease: "sine.inOut",
      });

      gsap.to(".Text", {
        duration: 20,
        x: 100,
        y: -400,
        scrollTrigger: {
          trigger: ".firstSectionContainer",
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
          trigger: ".firstSectionContainer",
          markers: false,
          start: "200px 200px",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".cloud", {
        duration: 20,
        x: 200,
        scrollTrigger: {
          trigger: ".firstSectionContainer",
          markers: false,
          start: "200px 200px",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".backGround", {
        duration: 20,
        x: 200,
        scrollTrigger: {
          trigger: ".firstSectionContainer",
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
    <Container className="firstSectionContainer">
      <Wrapper>
        <WelcomImage className="Image" src={img}></WelcomImage>
      </Wrapper>
      <TextContainer className="Text">
        <Text>Hi</Text>
        <KeyboardDoubleArrowDownIcon
          className="arrow"
          sx={{ transform: "scale(10)", color: "#313131" }}
        />
      </TextContainer>
    </Container>
  );
};

export default FirstSection;
