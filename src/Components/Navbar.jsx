import { React, useEffect } from "react";
import styled from "styled-components";
import { gsap, ScrollTrigger } from "gsap/all";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Container = styled.div`
  height: 10vh;
  background-color: white;
  color: #000000;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100000;
  transition: ease 0.4s;
  &--scrolled {
    height: 40px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  margin-left: 5vw;
  margin-right: 5vw;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

const NavbarItem = styled.h3`
  margin-left: 2vh;
  margin-right: 2vh;
  font-weight: 20;
  font-family: "Fredoka One", sans-serif;
  border-radius: 10%;
  padding: 0.5vw;
  border: 0.1px solid lightgrey;
  cursor: pointer;
`;
const Logo = styled.h1`
  margin-left: 2vh;
  margin-right: 2vh;
  font-size: 2.5vw;
  font-family: "Fredoka One", sans-serif;
`;

const RightItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sectionAnimation = gsap.context(() => {
      const showAnim = gsap
        .from(".navbar", {
          yPercent: -100,
          paused: true,
          duration: 0.4,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
    });
    return () => sectionAnimation.revert();
  }, []);

  return (
    <Container className="navbar">
      <Wrapper>
        <Logo>KARIM.</Logo>
        <RightItems>
        <NavbarItem>
            <IconContainer>
              <LinkedInIcon></LinkedInIcon>Linkedin
            </IconContainer>
          </NavbarItem>
          <NavbarItem>
            
            <IconContainer>
              <GitHubIcon></GitHubIcon>GitHub
            </IconContainer>
          </NavbarItem>
          <NavbarItem>Portfolio</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </RightItems>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
