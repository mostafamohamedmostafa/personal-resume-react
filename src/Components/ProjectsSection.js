import React from "react";
import { ProjectsComponent } from "./ProjectsComponent";

export const ProjectsSection = () => {
  return (
    <section className="Projects-Section container-fluid">
      <h6 className="text-muted">Latest Works</h6>

      <h1>
        {" "}
        Explore My Popular<span> Projects</span>{" "}
      </h1>

      <ProjectsComponent />
    </section>
  );
};
