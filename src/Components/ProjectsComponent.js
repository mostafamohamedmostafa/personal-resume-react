import React from "react";
import { ProjectsData } from "./WebsiteData";
export const ProjectsComponent = () => {
  return (
    <section className="container-fluid ProjectsComponent">
      <div className="row  row-cols  ">
        {ProjectsData.map((ProjectDataImported, index) => {
          return (
            <div className="col-lg-6" key={index}>
              <div className="card mb-3" data-aos="zoom-in-up">
                <div className="row g-2">
                  <div className="col-md-6">
                    <img
                      className="img-fluid"
                      alt={ProjectDataImported.ProjectImgAlt}
                      src={ProjectDataImported.ProjectImg}
                    ></img>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body Project-Card-Component">
                      <h5 className="card-text">
                        <span> {ProjectDataImported.ProjectCat}</span>
                      </h5>
                      <h3 className="card-title">
                        {ProjectDataImported.ProjectName}
                      </h3>

                      <p className="card-text">
                        {ProjectDataImported.ProjectDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
