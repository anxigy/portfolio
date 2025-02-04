import React from "react";
import '../styles/about.css';
import '../styles/style.css';
import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import backgroundImage from "../assets/stone-texture.jpeg";


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
`

const MainWrap = styled.div`
  width: 70%;
  height: 100%;
  // background-color: #000;
`

const MainSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 80%;
`
const TextSection = styled.div`
  width: 70%;
`
const ProfileSection = styled.div`
  width: 30%;
  height: 70%;
`

const MainTitle = styled.h1`
  color: #fff;
  font-size: 100px;
  white-space: pre-wrap;
  text-align: left;
  font-family: "Archivo Black", serif;
  font-weight: 400;
  font-style: normal;
`

const Description = styled.p`
  color: #fff;
  font-size: 16px;
  white-space: pre-wrap;
  text-align: left;
  font-family: "Pretendard Variabl";
  font-weight: 400;
  font-style: normal;
  line-height: 25px;
  margin-top: 3rem;
`

const BoldText = styled.span`
  font-weight: bold;
`;

export const About = () => {

  return (
    <Container id="Container">
      {/* <MainTitle>{title}</MainTitle> */}
      <MainWrap>
        <MainSection>
          <TextSection>
            <MainTitle>{`Hello\nI'm Lucy`}</MainTitle>
            <Description>
              {`안녕하세요. `}
              <BoldText>3년차</BoldText>
              {` 프론트엔드 개발자 `}
              <BoldText>남가영</BoldText>
              {`입니다.\n누구보다 끈기가 강하고 새로운 것을 배우는 것에 대하여 거리낌 없다고 당당하게 이야기 할 수 있습니다.`}
            </Description>
          </TextSection>
          <ProfileSection>
            <img src={require('../assets/avatar2.png')} alt="" width={'100%'} height={'100%'}/>
          </ProfileSection>
        </MainSection>
      </MainWrap>
    </Container>
  )
}