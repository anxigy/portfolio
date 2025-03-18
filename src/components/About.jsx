import React from "react";
import '../styles/about.css';
import '../styles/style.css';
import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import backgroundImage from "../assets/stone-texture.jpeg";
import { isMobile } from "react-device-detect";


const Container = styled.section`
  background-image: url(${backgroundImage});
  scroll-snap-align: start;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 50pt;
  height: 100%;

  position: relative;
`

const MainWrap = styled.div`
  width: 75%;
  height: 100%;
  // background-color: #000;
`

const MainSection = styled.div`
  width: 100%;
  /* display: flex; */
  /* justify-content: space-between;
  align-items: flex-end; */
  height: 80%;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 2rem;
    display: flex;
  }
`

const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const ProfileWrapper = styled.div`
  display: flex;
  z-index: 20;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #D9D9D9;
  border-radius: 50%;
  width: 370px;
  height: 370px;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 7px 29px 0px;

  @media (max-width: 639px) {
    width: 300px;
    height: 300px;
    margin-top: 20px;
    text-align: center;
  }
   /* @media (max-width: 1100px) and (min-width: 640px) {
    width: 300px;
    height: 300px;
    margin-top: 2rem;
  } */
  
`


const MainTitle = styled.h1`
  width: 100%;
  color: white;
  font-size: 110px;
  font-family: "Dela Gothic One", sans-serif;
  font-style: normal;
  white-space: nowrap;
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 639px) {
    font-size: 30px;
    white-space: pre-wrap;
    display: block;
  }

   @media (max-width: 900px) and (min-width: 600px) {
    font-size: 80px;
  }
`;

const OutlineText = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 0.1px #cbcbcb; 
  font-family: "Archivo Black", serif;
  text-align: left;
  @media (max-width: 639px) {
    font-size: 30px;
    white-space: pre-wrap;
  }
`;

const Description = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: left;
  font-family: "Pretendard Variabl";
  font-weight: 400;
  font-style: normal;
  line-height: 25px;
`
const ProfileImage = styled.img`
  width: 220px;
  height: 290px;
  @media (max-width: 639px) {
    width: 180px;
    height: 250px;
  }
`;


const DiagonalLine = styled.div`
  position: absolute;
  width: 120%;
  height: 100px;
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(-23deg);
  top: 50%;
  overflow: hidden;
  z-index: 10;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  @media (max-width: 639px) {
    flex-direction: column;
    margin-top: 20px;
  }
`

export const About = ({ screenRef }) => {

  return (
    <Container id="Container" >
      <DiagonalLine />
      <MainWrap>
        <MainSection ref={screenRef}>
          <MainTitle>{`Hello I'm Lucy`}</MainTitle>
          <OutlineText>FRONTEND</OutlineText>
          <ProfileSection>
            <ProfileWrapper>
              {
                isMobile ?
                  <ProfileImage src={require('../assets/avatar2.png')} alt="" /> :
                  <ProfileImage src={require('../assets/avatar2.png')} alt="" />
              }
            </ProfileWrapper>
          </ProfileSection>
          <FooterWrapper>
            <Description>E-MAIL. nsh5438@naver.com</Description>
            <OutlineText style={{ textAlign: 'right' }}>DEVELOPER</OutlineText>
          </FooterWrapper>
        </MainSection>
      </MainWrap>
    </Container>
  )
}