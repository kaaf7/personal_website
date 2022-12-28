import { React, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import styled from "styled-components";
import RightHand from "../assets/Right_Hand.png";
import Phone from "../assets/Phone.png";
import LeftHand from "../assets/Left_Hand.png";
import Laptop from "../assets/Laptop.png";
const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid black;
  overflow: hidden;

`;

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
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
  width: 50%;
  margin-top: 0px;
  margin-right: 4vw;
`;
const Text = styled.p`
  font-family: "Fredoka One", cursive, sans-serif;
`;

const ForthSection = ({
  container,
  leftHand,
  rightHand,
  laptop,
  phone,
  text,
  color,
}) => {
  // register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  // create a ref for the root level element (for scoping)
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
        duration: 100,
        y: 100,
        scale: 0,
        scrollTrigger: {
          trigger: `.${container}`,
          markers: false,
          start: "200px 500px",
          end: "100px 200px",
          scrub: true,
        },
        ease: "sine.inOut",
      });

      gsap.from(`.${phone}`, {
        duration: 100,
        y: 100,
        scale: 0,
        scrollTrigger: {
          trigger: `.${container}`,
          markers: false,
          start: "300px 500px",
          end: "100px 200px",
          scrub: true,
        },
        ease: "sine.inOut",
      });

      gsap.from(`.${text}`, {
        duration: 100,
        y: 100,
        scale: 0,
        scrollTrigger: {
          trigger: `.${container}`,
          markers: false,
          start: "300px 500px",
          end: "100px 200px",
          scrub: true,
        },
        ease: "sine.inOut",
      });
    });
    return () => sectionAnimation.revert();
  }, []);

  return (
    <Container style={{ background: `${color}` }} className={container}>
      <Wrapper>
        <Image
          zIndex={1000}
          className={leftHand}
          size={1.2}
          src={LeftHand}
          top={"20vh"}
        ></Image>
        <Image
          zIndex={1}
          className={laptop}
          left={"6vw"}
          size={1.6}
          src={Laptop}
        ></Image>
        <Image className={phone} left={"5vw"} size={0.6} src={Phone}></Image>
        <Image
          className={rightHand}
          size={1.3}
          src={RightHand}
          top={"20vh"}
        ></Image>
      </Wrapper>{" "}
      <TextContainer>
        <Text className={text}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula,
        </Text>
      </TextContainer>
    </Container>
  );
};

export default ForthSection;
