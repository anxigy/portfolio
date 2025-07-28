import React from "react";
import '../styles/projects.css';
import '../styles/style.css';
import styled from "styled-components";

const Container = styled.section`
  scroll-snap-align: start;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  text-align: center;
  font-size: 50pt;
  background-color: #E63946;
  /* padding-top: 120px; */
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media (max-width: 639px) {
    padding-top: 3rem;
  }
`

const StyledGrid = styled.div.attrs({
  className: 'grid_design' 
})`
  border-radius: 60px;
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  overflow: hidden;
  
`;
export const Career = () => {
  return (
    <Container>
      <StyledGrid>
        
      </StyledGrid>
    </Container>
  )
}