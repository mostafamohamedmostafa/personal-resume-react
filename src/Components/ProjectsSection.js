import React from "react";
import { ProjectsComponent } from "./ProjectsComponent";

export const ProjectsSection = () => {
  return (
    <section className="Projects-Section container-fluid">
      <h5 className="">Latest Works</h5>

      <h1>
        {" "}
        Explore My Popular<span> Projects</span>{" "}
      </h1>

      <ProjectsComponent />
    </section>
  );
};
