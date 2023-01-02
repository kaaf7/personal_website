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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;
`;

const WelcomImage = styled.img`
  margin-top: 0vh;
  overflow: hidden;
  z-index: 9999;
  transform-origin: bottom;
  width: 60%;
  background-color: green;
  transform: scale(1.4);
`;

const ContactMeSection = styled.div`
  width: 20%;
  height: 100%;
  background: yellow;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
  flex: 1;
`;
const IconContainer = styled.div`
width: 100%;
height: 10%;
display: flex;
background-color: blue;
`;

const Text = styled.p`
  color: black;
  position: absolute;
`;
const FifthSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sectionAnimation = gsap.context(() => {
      gsap.from(".fifthSectionImage", {
        duration: 20,
        scale: 1,
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
        <ContactMeSection>
          <IconContainer>
            <Text>Hi</Text>
          </IconContainer>
        </ContactMeSection>
      </Wrapper>
    </Container>
  );
};

export default FifthSection;
