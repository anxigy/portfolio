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
`

export const About = () => {

  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = 'Hello\nI\'m Lucy';

  return (
    <Container id="Container">
      {/* <MainTitle>{title}</MainTitle> */}
    </Container>
  )
}