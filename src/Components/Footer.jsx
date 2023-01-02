// import react
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #efefef;
  overflow: hidden;
`;
const ContactMeSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Signika", sans-serif;
`;

const Icon = styled.div`
  margin-left: 1vh;
  margin-right: 1vh;
  width: 10vh;
  height: 5vh;
  display: flex;
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
const Separator = styled.span`
  height: 100%;
  width: 20px;
  margin: 1vh;
  background-color: black;
`;
const Footer = () => {
  const gitHubLink = "https://github.com/kaaf7";

  return (
    <Container>
      <ContactMeSection>
        <IconContainer>
          © 2023 Created by Karim Amer
          <Separator></Separator>
          <a
            style={{ color: "black", textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
            href={gitHubLink}
          >
            <Icon>
              <GitHubIcon
                sx={{ marginRight: ".2vw", color: "black" }}
              ></GitHubIcon>
              GitHub
            </Icon>
          </a>
          <Icon>Contact</Icon>
        </IconContainer>
      </ContactMeSection>
    </Container>
  );
};

export default Footer;
