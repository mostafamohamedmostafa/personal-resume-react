import React from "react";
import { SkillsComponent } from "./SkillsComponent";

export const MySkillsSection = () => {
  return (
    <section className="My-Skills-Section container-fluid">
      <div className="row  row-cols My-Skills-Card  ">
        <div className="col-md-4  " data-aos="zoom-in-up">
          <div className="card h-100 ">
            <div className="card-body">
              <h5 className=" ">My Skills</h5>

              <h1>
                Let’s Explore Popular <span> Skills & Experience</span>
              </h1>

              <h5>
                Nulla consectetur diam et elementum ullamcorper. Nam tortor
                magna, sagittis eu tempor ac, sagittis sed nibh. Maecenas cursus
                lacinia condimentum. Aenean egestas nisi eget dolor lacinia, eu
                tristique magna iaculis. Donec ultricies pellentesque semper.
                Integer scelerisque blandit tellus vitae suscipit. Nam nec
                lectus mollis, euismod turpis nec, malesuada eros. Vestibulum
                efficitur risus felis, et aliquet est malesuada sit amet.
              </h5>
            </div>
          </div>
        </div>

        <div
          className="col-md-8    My-Skills-Card-Skills "
          data-aos="zoom-in-up"
        >
          <div className="  h-100 ">
            <div className="card-body">
              <SkillsComponent></SkillsComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
