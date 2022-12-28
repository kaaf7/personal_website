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
  width: 100%;
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
        <p align="left">
          {" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="120"
              height="120"
            />{" "}
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="120"
              height="120"
            />{" "}
          </a>{" "}
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="120"
              height="120"
            />{" "}
          </a>{" "}
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="120"
              height="120"
            />{" "}
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="120"
              height="120"
            />{" "}
          </a>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="120"
              height="120"
            />{" "}
          </a>{" "}
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width="120"
              height="120"
            />{" "}
          </a>{" "}
          <a href="https://redux.js.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
              width="120"
              height="120"
            />{" "}
          </a>
        </p>{" "}
      </TextContainer>
    </Container>
  );
};

export default ThirdSection;
