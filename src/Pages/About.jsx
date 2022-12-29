import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #efefef;
`;
const Wrapper = styled.div`
  margin-top: 20vh;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: #efefef;
`;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-left: 5vw;
  height: 100%;
  width: 50%;
`;
const BioTitle = styled.h1`
  font-size: 5vh;
  margin-bottom: 0;
`;
const BioText = styled.div`
  font-size: 1vw;
  margin-top: 3vh;
`;
const PersonalPhoto = styled.img`
  background-color: #989898;
  height: 60%;
  width: 50%;
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 50%;
`;
const About = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <LeftSection>
          <BioTitle>About Me</BioTitle>
          <BioText>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </BioText>{" "}
          <BioText>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </BioText>
        </LeftSection>
        <RightSection>
          {" "}
          <PersonalPhoto />
        </RightSection>
      </Wrapper>
    </Container>
  );
};

export default About;
