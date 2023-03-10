/* * 👇
 *This is Navbar Component
 *Styled with styled components
 *It navigates through the personal website
 */

// react
import { React, useEffect } from "react";
// navigate
import { useNavigate } from "react-router-dom";
//  import styled components
import styled from "styled-components";
// gsap scroll trgigger
import { gsap, ScrollTrigger } from "gsap/all";
// githubicon
import GitHubIcon from "@mui/icons-material/GitHub";
// linkedin icon
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// all items container
const Container = styled.div`
  height: 8vh;
  background-color: #fbf9ff;
  color: #313131;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100000;
  transition: ease 0.2s;
  &--scrolled {
    height: 4vh;
  }
`;
// items wrapper
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  margin-left: 5vw;
  margin-right: 5vw;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;
// navbar items
const NavbarItem = styled.button`
  margin-left: 1vh;
  margin-right: 1vh;
  width: 10vh;
  height: 5vh;
  font-weight: 20;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Signika", sans-serif;
  font-size: 1.5vh;
  border-radius: 1vh;
  font-weight: 400;
  border: 0.1px solid lightgrey;
  background: none;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;
// logo
const Logo = styled.h1`
  margin-left: 2vh;
  margin-right: 2vh;
  font-size: 2.5vw;
  color: #313131;
  font-family: "Signika", sans-serif;
  cursor: pointer;
`;
// right items section
const RightItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// single icon container
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Navbar = () => {
  // personal github link
  const gitHubLink = "https://github.com/kaaf7";
  // use navigate hook
  const navigate = useNavigate();
  const NavigateDir = (dir) => {
    navigate(dir);
  };
  // scroll trigger
  gsap.registerPlugin(ScrollTrigger);

  // navbar animation when scrolling down it disappears when scrolling up it shows up again
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
        <Logo
          onClick={() => {
            NavigateDir("/");
          }}
        >
          KARIM.
        </Logo>
        <RightItems>
          <NavbarItem>
            <a
              style={{ color: "black", textDecoration: "none" }}
              href={gitHubLink}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <IconContainer>
                <GitHubIcon
                  sx={{ marginRight: ".2vw", color: "black" }}
                ></GitHubIcon>
                GitHub
              </IconContainer>{" "}
            </a>
          </NavbarItem>
          <NavbarItem
            onClick={() => {
              NavigateDir("/");
            }}
          >
            <IconContainer>
              Home
              {/* <LinkedInIcon sx={{ marginRight: ".2vw" }}></LinkedInIcon>Linkedin */}
            </IconContainer>
          </NavbarItem>

          <NavbarItem
            onClick={() => {
              NavigateDir("/projects");
            }}
          >
            Projects
          </NavbarItem>
          <NavbarItem
            onClick={() => {
              NavigateDir("/about");
            }}
          >
            About
          </NavbarItem>
          <NavbarItem
            onClick={() => {
              NavigateDir("/contact");
            }}
          >
            Contact
          </NavbarItem>
        </RightItems>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
