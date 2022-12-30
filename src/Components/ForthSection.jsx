import { React, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

import styled from "styled-components";
import Phone from "../assets/Phone.png";
import Laptop from "../assets/Laptop.png";
import Technologies from "./Technologies";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border-bottom: 0.5vh solid #313131;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
`;

const Image = styled.img`
  overflow: hidden;
  transform: scale(1);
  z-index: ${(props) => props.zIndex};
  position: relative;
  margin-left: ${(props) => props.left};
  margin-right: ${(props) => props.right};
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
  transform: scale(${(props) => props.size});
  flex: 1;
`;
const TextContainer = styled.div`
  width: 60%;
  margin-top: 0px;
  margin-right: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.p`
  font-size: 2vh;
  font-family: "Signika", sans-serif;
`;
const Anchor = styled.a`
  width: 70%;
  display: flex;
  justify-content: center;
`;

const ForthSection = ({
  container,
  leftHand,
  rightHand,
  laptop,
  phone,
  text,
  color,
  dir,
}) => {
  // register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let sectionAnimation = gsap.context(() => {
      gsap.from(`.${leftHand}`, {
        duration: 100,
        x: 450,
        scale: 1.4,
        scrollTrigger: {
          trigger: `.${container}`,
          markers: false,
          start: "200px 500px",
          end: "100px 200px",
          scrub: true,
        },
        ease: "sine.inOut",
      });
      gsap.from(`.${rightHand}`, {
        duration: 100,
        x: -450,
        scale: 1.4,
        scrollTrigger: {
          trigger: `.${container}`,
          markers: false,
          start: "200px 500px",
          end: "100px 200px",
          scrub: true,
        },
        ease: "sine.inOut",
      });

      gsap.from(`.${laptop}`, {
        duration: 20,
        x: -400,
        scrollTrigger: {
          trigger: `.${container}`,
          markers: false,
          start: "-800px 500px",
          end: "0px top",
          scrub: true,
        },
      });
      gsap.from(`.${phone}`, {
        duration: 20,
        x: 400,

        scrollTrigger: {
          trigger: `.${container}`,
          markers: false,
          start: "-800px 500px",
          end: "0px top",
          scrub: true,
        },
      });
    });

    return () => sectionAnimation.revert();
  }, []);

  return (
    <Container style={{ background: `${color}` }} className={container}>
      <Wrapper>
        <Anchor href={dir} target="_blank" rel="noreferrer">
          {" "}
          <Image
            alt="react"
            zIndex={1}
            className={laptop}
            left={"22vw"}
            right={0}
            size={1.5}
            src={Laptop}
          />{" "}
        </Anchor>
        <Anchor href={dir} target="_blank" rel="noreferrer">
          {" "}
          <Image
            alt="react"
            zIndex={1}
            className={phone}
            left={0}
            right={"8vw"}
            size={0.4}
            src={Phone}
          />{" "}
        </Anchor>
      </Wrapper>{" "}
      <TextContainer className={text}>
        <Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula,
        </Text>{" "}
        <Technologies dimension={90} />
      </TextContainer>
    </Container>
  );
};

export default ForthSection;
