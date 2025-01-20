import React from "react";
import '../styles/about.css';
import '../styles/style.css';
import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const typing = keyframes`
  from {border-right: 2px solid white}
  to {border-right: 2px solid black}
`;

const Container = styled.section`
  min-height: calc(var(--vh, 1vh) * 100);
  padding: 7rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 12rem;
`

const MainTitle = styled.p`
  color: ${props => props.theme.white};
  font-size: 120px;
  line-height: 100px;
  font-weight: 500;
  white-space: pre-wrap;
  animation: ${typing} 1s ease-in-out 0ms 8;
`

export const About = () => {

  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = 'Hello,\nI\'m Lucy';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setTitle('');
        }
        return result;
      });
    }, 300);
    if(count === completionWord.length) clearInterval(typingInterval);
    return () => {
      clearInterval(typingInterval);
    };
  });

  useEffect(() => {
    let vh = 0;
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [window.innerHeight]);

  return (
    <Container id="Container">
      <MainTitle>{title}</MainTitle>
    </Container>
  )
}