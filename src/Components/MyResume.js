import React from "react";
import WorkExperienceImg from "../img/WorkExperience.png";

import { BsBriefcase } from "react-icons/bs";
export const MyResume = () => {
  return (
    <section className="My-Resume-Section container-fluid">
      <div className="row  row-cols  ">
        <div className="col-lg-3 Left-My-Resume-Card  " data-aos="zoom-in-up">
          <div className="card h-100 ">
            <div className="card-body">
              <img className="img-fluid " src={WorkExperienceImg}></img>
            </div>
          </div>
        </div>

        <div className="col-lg-9 Right-My-Resume-Card  " data-aos="zoom-in-up">
          <div className="card h-100  ">
            <div className="card-body">
              <h5 className="text-muted">My Resume</h5>
              <h1>
                Real <span>Problem Solutions </span> Experience
              </h1>

              <div className="card Inner-Right-My-Resume-Card container">
                <div className="row  row-cols  ">
                  <div className="col-lg-6  " data-aos="zoom-in-up">
                    <div className="card">
                      <div className="row g-0">
                        <div className="col-md-3">
                          <h1>
                            <BsBriefcase />
                          </h1>
                        </div>
                        <div className="col-md-9">
                          <div className="card-body">
                            <h3 className="card-title">2021 - Present</h3>
                            <h5 className="card-text"></h5>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                Google
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6  " data-aos="zoom-in-up">
                    <div className="card">
                      <div className="row g-0">
                        <div className="col-md-3">
                          <h1>
                            <BsBriefcase />
                          </h1>
                        </div>
                        <div className="col-md-9">
                          <div className="card-body">
                            <h3 className="card-title">2021 - Present</h3>
                            <h5 className="card-text"></h5>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                Google
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6  " data-aos="zoom-in-up">
                    <div className="card">
                      <div className="row g-0">
                        <div className="col-md-3">
                          <h1>
                            <BsBriefcase />
                          </h1>
                        </div>
                        <div className="col-md-9">
                          <div className="card-body">
                            <h3 className="card-title">2021 - Present</h3>
                            <h5 className="card-text"></h5>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                Google
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6  " data-aos="zoom-in-up">
                    <div className="card">
                      <div className="row g-0">
                        <div className="col-md-3">
                          <h1>
                            <BsBriefcase />
                          </h1>
                        </div>
                        <div className="col-md-9">
                          <div className="card-body">
                            <h3 className="card-title">2021 - Present</h3>
                            <h5 className="card-text"></h5>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                Google
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
