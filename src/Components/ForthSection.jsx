import React from "react";
import styled from "styled-components";
import RightHand from "../assets/Right_Hand.png";
import Laptop from "../assets/Laptop.png";
import Phone from "../assets/Phone.png";
import LeftHand from "../assets/Left_Hand.png";

const Container = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(color) => color};
  border-bottom: 1px solid lightgrey;
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
  z-index: 9999;
  position: relative;
  margin-left: ${(props) => props.left};
  margin-right: ${(props) => props.right};
  transform: scale(${(props) => props.size});
  flex: 1;
`;
const TextContainer = styled.div`
  width: 50%;
  margin-top: 0px;
  margin-right: 4vw;
`;

const ForthSection = (color) => {
  return (
    <Container>
      <Wrapper>
        <Image size={1} src={LeftHand}></Image>
        <Image left={"6vw"} size={1.6} src={Laptop}></Image>
        <Image left={"5vw"} size={0.6} src={Phone}></Image>
        <Image size={1} src={RightHand}></Image>
      </Wrapper>{" "}
      <TextContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula,
        </p>
      </TextContainer>
    </Container>
  );
};

export default ForthSection;
