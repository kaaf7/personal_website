import { React, useEffect } from "react";
import styled from "styled-components";
import img from "../assets/Lower_Section_2.png";
import { gsap, ScrollTrigger } from "gsap/all";
const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-color: #efefef;
`;

const Text = styled.h1`
  color: black;
  font-size: 15vh;
  position: absolute;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  overflow: hidden;
`;

const WelcomImage = styled.img`
  margin-top: 0vh;
  overflow: hidden;
  transform: scale(1);
  z-index: 9999;
  transform-origin: bottom;
`;
const FifthSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sectionAnimation = gsap.context(() => {
      gsap.from(".fifthSectionImage", {
        duration: 20,
        scale: 0.8,
        scrollTrigger: {
          trigger: ".fifthSectionImage",
          markers: false,
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
