import React from "react";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

export const MainPage = () => {
  return (
    <div>
      {/* <Header/> */}
      <main>
        <About />
        {/* <Projects /> */}
      </main>
    </div>
  )
}