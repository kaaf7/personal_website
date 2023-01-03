import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import Technologies from "../Components/Technologies";
import PersPhoto from "../assets/personal.jpg";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #efefef;
`;
const Wrapper = styled.div`
  margin-top: 20vh;
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
const Title = styled.h1`
  font-size: ${(props) => props.size};
  margin-bottom: 2vh;
  margin-top: 4vh;
`;
const BioText = styled.div`
  font-size: 1vw;
  margin-top: 3vh;
`;

const PersonalPhoto = styled.img`
  height: 60%;
  width: 50%;
  object-fit: cover;

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
          <Title size={"5vh"}>About</Title>
          <BioText>
            As a full-stack developer with a background in architectural
            engineering, I have a strong foundation in both technical and
            creative skills. I hold a master's degree in architecture and have
            worked on various design and architectural projects, including
            experience as an architectural engineer with one of Germany's
            leading firms. Over the past five years, I have developed my design
            skills, project execution, and leadership abilities. In recent
            months, I have also gained proficiency in HTML/CSS, JavaScript,
            Redux, MongoDB, and ReactJS.
          </BioText>
          <BioText>
            My passion for learning and ability to learn new things
            independently have been developed through my university studies and
            professional background in engineering
          </BioText>{" "}
          <Title size={"4vh"}>Skills</Title>
          <Technologies dimension={80} />
        </LeftSection>
        <RightSection>
          {" "}
          <PersonalPhoto src={PersPhoto} />
        </RightSection>
      </Wrapper>
    </Container>
  );
};

export default About;
