import React from "react";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  flex-direction: column;
  overflow: hidden auto;
  scroll-snap-type: y mandatory;
`

export const MainPage = () => {
  return (
    <div>
      {/* <Header/> */}
      <Container>
        <About />
        <Projects />
      </Container>
    </div>
  )
}