import { React, useEffect } from "react";
import styled from "styled-components";
import { gsap, ScrollTrigger } from "gsap/all";

const Container = styled.div`
  height: 8vh;
  // background: #50e3fd;
  //background-color: #f9f9f9;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
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

  return <Container className="navbar"></Container>;
};

export default Navbar;
