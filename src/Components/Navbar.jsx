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

const NavbarItem = styled.button`
  margin-left: 2vh;
  margin-right: 2vh;
  width: 10vh;
  height: 5vh;
  font-weight: 20;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Fredoka One", sans-serif;
  border-radius: 1vh;
  border: 0.1px solid lightgrey;
  background: none;
  transition: .5s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition: .5s;
  }
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
              <LinkedInIcon sx={{ marginRight: ".2vw" }}></LinkedInIcon>Linkedin
            </IconContainer>
          </NavbarItem>
          <NavbarItem>
            <IconContainer>
              <GitHubIcon sx={{ marginRight: ".2vw" }}></GitHubIcon>GitHub
            </IconContainer>
          </NavbarItem>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </RightItems>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
