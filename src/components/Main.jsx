import React from "react";
import '../styles/about.css';
import '../styles/style.css';
import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import backgroundImage from "../assets/stone-texture.jpeg";
import { isMobile } from "react-device-detect";
import { PixcelWindow } from "./PixcelWindow";


const Container = styled.section`
  /* background-image: url(${backgroundImage}); */
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
const WindowContainer = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  height: 100%;
  margin-top: 12%;
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 30px;
`

const TitleWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 85%;
  h1 {
    font-family: '04b30';
    color: #FF0000;
    font-size: 85px;
    text-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const Main = ({ screenRef }) => {

  return (
    <Container id="Container" >
      <section class="grid_design" ref={screenRef}>
        <WindowContainer>
          <PixcelWindow width={500} height={300} top={0} left={0}/>
          <PixcelWindow width={620} height={350} top={80} right={0}/>
        </WindowContainer>
        <ImageWrapper>
          <img src={require('../assets/pixcel_me.png')} alt=""  width={'54%'}/>
        </ImageWrapper>
        <TitleWrapper>
          <h1>PORTFOLIO</h1>
        </TitleWrapper>
      </section>
    </Container>
  )
}