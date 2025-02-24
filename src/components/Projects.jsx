import React from "react";
import styled from "styled-components";
import { Project } from "./projects/Project";
import { ProjectData } from "../assets/project_data";

const Container = styled.section`
  scroll-snap-align: start;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  text-align: center;
  font-size: 50pt;
  background-color: #fff;
  padding-top: 100px;
  flex-direction: column;
  height: 100%;

  align-items: center;
`

const ProjectHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #6e6e6e;
  padding: 10px 0px;
`

const Wrapper = styled.div`
  width: 70%;
  height: 80%;
`

const CardWrapper = styled.div`
  padding-top: 3rem;
  display: flex;
  overflow-x: scroll;
  gap: 16px;
  white-space: nowrap;
  height: 85%;
  &::-webkit-scrollbar { display: none; }
`

const Title = styled.h1`
   color: #000;
    font-size: 60px;
    font-family: "Pretendard Variabl";
    font-style: normal;
`;

const Tabs = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14pt;
`;

const Tab = styled.span`
  cursor: pointer;
  color: ${(props) => (props.active ? "white" : "#777")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  border-bottom: ${(props) => (props.active ? "2px solid white" : "none")};
  padding-bottom: 5px;
`;

export const Projects = () => {
  return (
    <Container>
      <Wrapper>
        <ProjectHeader>
          <Title>PROJECT</Title>
          {/* <Tabs>
            <Tab active>ALL</Tab>
            <Tab>WEB</Tab>
            <Tab>APP</Tab>
          </Tabs> */}
        </ProjectHeader>
        <CardWrapper>
          {ProjectData.map((project, index) => (
            <Project data={project} idx={index}/>
          ))}
        </CardWrapper>
      </Wrapper>
    </Container>
  )
}