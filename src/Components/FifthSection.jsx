import { React, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/Lower_Section_2.png";
import { gsap, ScrollTrigger } from "gsap/all";
const Container = styled.div`
  height: 95vh;
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
  margin-top: 0vh;
  overflow: hidden;
  transform: scale(0.8);
  z-index: 9999;
`;
const FifthSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sectionAnimation = gsap.context(() => {
      gsap.from(".fifthSectionImage", {
        duration: 20,
        scale: .5,
        scrollTrigger: {
          trigger: ".fifthSectionImage",
          markers: true,
          start: "-100px 200px",
          end: "-62px 100px",
          scrub: true,
        },
      });
    });
    return () => sectionAnimation.revert();
  }, []);

  return (
    <Container>
      <Wrapper>
        <WelcomImage className="fifthSectionImage" src={img}></WelcomImage>
      </Wrapper>
    </Container>
  );
};

export default FifthSection;
