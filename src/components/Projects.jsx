import React from "react";
import '../styles/projects.css';
import '../styles/style.css';
import { Project } from "./projects/Project";
import { ProjectData } from "../assets/project_data";

export const Projects = () => {
  return (
    <section id="projects">
      <p className="title__white">PROJECT</p>
      <div className="project__maxconatiner">
        <ul className="project__container">
          {
            ProjectData?.map((item, idx) => (<Project data={item} idx={idx}/>))
          }
        </ul>
      </div>
    </section>
  )
}