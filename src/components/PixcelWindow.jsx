import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const WindowWrapper = styled(motion.div)`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  border: 2px solid #FF3B3B;
  background: #FFF44F;
  width: ${({ width }) => width}px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  background: white;
  height: 30px;
  border: 2px solid #FF3B3B;
`;

const Title = styled.div`
  flex: 1;
  font-size: 14px;
`;

const CloseButton = styled.button`
  background: #FFF44F;
  color: #FF3B3B;
  border: 2px solid #FF3B3B;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 2px;
  outline: 0;
  padding: 0;
  font-family: 'DungGeunMo';
  font-size: 16px;
`;

const Content = styled.div`
  border: 2px solid #ff4d73;
  margin: 0 8px 8px 8px;
  padding: 16px;
  height: ${({ height }) => height}px;
  background-color: #fff;
`;

const windowVariants = {
  hidden: { opacity: 0, scale: 0.5, y: -50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
};


export const PixcelWindow = ({width, height, top, left, right}) => {
  return (
    <WindowWrapper    variants={windowVariants}
    initial="hidden"
    animate="visible" width={width} top={top} left={left} right={right}>
      <TitleBar>
        <Title></Title> 
        <CloseButton>X</CloseButton>
      </TitleBar>
      <Content height={height}>
        {/* content goes here */}
      </Content>
    </WindowWrapper>
  )
}