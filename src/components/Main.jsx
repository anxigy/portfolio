import React from "react";
import '../styles/about.css';
import '../styles/style.css';
import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import backgroundImage from "../assets/stone-texture.jpeg";
import { isMobile } from "react-device-detect";
import { PixcelWindow } from "./PixcelWindow";
import { motion } from "framer-motion";


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
  right: -16%;
  bottom: 30px;
`

const ContentWrapper = styled(motion.div)`
  position: absolute;
  width: 75%;
  height: 100%;
`

const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 25%;
  h1 {
    display: flex;
    font-family: '04b30';
    color: #FF0000;
    font-size: 85px;
    text-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-left: 10%;
    margin-top: 20px;
  }
`

const BoxWrapper = styled.div` 
  background-color: #E63946;
  width: 340px;
  text-align: right;
  padding: 10px 20px;
  height: fit-content;
  h2 {
    font-family: 'DungGeunMo';
    font-size: 30px;
    color: #fff;
  }
`

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};



export const Main = ({ screenRef }) => {
  const [showWindows, setShowWindows] = useState([]);
  const [showContents, setShowContents] = useState(false);

  useEffect(() => {
    // 따닥: 첫번째, 두번째 창
    setTimeout(() => setShowWindows(["win1"]), 100);
    setTimeout(() => setShowWindows(["win1", "win2"]), 400);

    // 조금 후에 나머지 콘텐츠
    setTimeout(() => setShowContents(true), 800);
  }, []);

  return (
    <Container id="Container" >
      <section class="grid_design" ref={screenRef}>
        <WindowContainer>
        {showWindows.includes("win1") && ( <PixcelWindow width={500} height={300} top={0} left={0}/> ) }
        {showWindows.includes("win2") && ( <PixcelWindow width={620} height={350} top={80} right={0}/> ) }
        </WindowContainer>
        {
          showContents && (
            <ContentWrapper
              variants={contentVariants}
              initial="hidden"
              animate="visible">
              <ImageWrapper>  
                <img src={require('../assets/pixcel_me.png')} alt=""  width={'54%'}/>
              </ImageWrapper>
              <TitleWrapper>
                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                  <BoxWrapper>
                    <h2>FRONTEND DEVELOPER</h2>
                  </BoxWrapper>
                  <img src={require('../assets/cherry.png')} alt="" width={88} style={{marginLeft: 20, transform: 'rotate(25deg)'}}/>
                </div>
                <h1>PORTFOLIO</h1>
              </TitleWrapper>
            </ContentWrapper>
          )
        }
      </section>
    </Container>
  )
}