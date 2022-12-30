import React from 'react'
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
`

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
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 50%;
`;
const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact