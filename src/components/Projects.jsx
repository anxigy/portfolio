import React from "react";
import '../styles/projects.css';
import '../styles/style.css';
import { Project } from "./projects/Project";
import { ProjectData } from "../assets/project_data";
import styled from "styled-components";

const Container = styled.section`
  scroll-snap-align: start;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 50pt;
`

export const Projects = () => {
  return (
    <Container id="projects">
     
    </Container>
  )
}