import React from "react";
import { SkillsData } from "./WebsiteData";
export const SkillsComponent = () => {
  return (
    <section className="SkillsComponent container-fluid">
      <div className="row  row-cols  ">
        {SkillsData.map((SkillsDataImported, index) => {
          return (
            <div className="col-md-3 col-6 g-4  " data-aos="zoom-in-up" key={index}>
              <div className="card  h-100 ">
                <img
                  className="img-fluid"
                  src={SkillsDataImported.SkillImg}
                  alt={SkillsDataImported.SkillImgAlt}
                ></img>
                <div className="card-body text-center">
                  <h3 className="card-title">
                    {SkillsDataImported.SkillName}
                  </h3>
                  <h5 className="card-text">
                    {SkillsDataImported.SkillDegree}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
