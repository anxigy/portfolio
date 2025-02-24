import React, { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Career } from "../components/Career";
import styled from "styled-components";
import { Projects } from "../components/Projects";
import { Education } from "../components/Education";

const Container = styled.main`
  height: 100vh;
  flex-direction: column;
  overflow: hidden auto;
  scroll-snap-type: y mandatory;
`


export const MainPage = () => {
  const ref = useRef(null);
  const screenRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const updateScroll = () => {
    setScrollPosition(ref?.current?.scrollTop)
  };

  useEffect(() => {
    ref?.current?.addEventListener("scroll", updateScroll);
    return () => {
      ref?.current?.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    setScreenHeight(screenRef?.current?.offsetHeight)
  },[screenRef])

  return (
    <div>
      {/* <Header changeColor={screenHeight < scrollPosition}/> */}
      <Container ref={ref}>
        <About screenRef={screenRef}/>
        <Career />
        <Projects />
        <Education />
      </Container>
    </div>
  )
}