import React from "react";
import AboutMeImage from "../img/AboutMeImage.jpg";
import { BsCheckCircle } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
import { BsPhoneVibrate } from "react-icons/bs";
export const AboutMeSection = () => {
  return (
    <section className="About-Me-Section container-fluid">
      <div className="row  row-cols  ">
        <div className="col-lg-6 About-Me-Card " data-aos="zoom-in-up">
          <div className="card h-100 Left-Card ">
            <div className="card-body">
              <div>
                <h5 className="text-muted">About Me</h5>
                <h2>
                  Professional <span> Problem Solutions </span>For Digital
                  Products
                </h2>
                <p>
                  . Suspendisse eget egestas lectus. Duis leo turpis, rutrum at
                  lorem nec, scelerisque semper odio. Praesent aliquet
                  vestibulum vestibulum. Proin mauris est, placerat ac mattis
                  congue, posuere ac lectus. Sed tempus aliquam sollicitudin.
                  Vestibulum quam neque, gravida quis finibus eget, volutpat id
                  velit. Nam neque sapien, euismod sed congue auctor, lobortis
                  at lacus. Aenean viverra fringilla neque sed gravida.
                </p>
              </div>

              <div className="row  row-cols  ">
                <div className="col-6  " data-aos="zoom-in-up">
                  <div className="card h-100 ">
                    <div className="card-body">
                      <h3>
                        <span>
                          {" "}
                          <BsCheckCircle />{" "}
                        </span>{" "}
                        Services{" "}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-6  " data-aos="zoom-in-up">
                  <div className="card h-100 ">
                    <div className="card-body">
                      <h3>
                        <span>
                          {" "}
                          <BsCheckCircle />{" "}
                        </span>
                        Services{" "}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-6  " data-aos="zoom-in-up">
                  <div className="card h-100 ">
                    <div className="card-body">
                      <h3>
                        <span>
                          {" "}
                          <BsCheckCircle />{" "}
                        </span>
                        Services{" "}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-6  " data-aos="zoom-in-up">
                  <div className="card h-100 ">
                    <div className="card-body">
                      <h3>
                        <span>
                          {" "}
                          <BsCheckCircle />{" "}
                        </span>
                        Services{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row  row-cols  About-Me-Contact-Card ">
                <div className="col-6  " data-aos="zoom-in-up">
                  <div className="card h-100 ">
                    <div className="card-body">
                      <h3>
                        <span>
                          <BsPhoneVibrate />{" "}
                        </span>{" "}
                        Call Me{" "}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-6  " data-aos="zoom-in-up">
                  <div className="card h-100 ">
                    <div className="card-body">
                      <h3>
                        <span>
                          {" "}
                          <BsEnvelopeAt />{" "}
                        </span>{" "}
                        Email Me{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 About-Me-Card" data-aos="zoom-in-up">
          <div className="card h-100 ">
            <div className="card-body">
              <img className="img-fluid" src={AboutMeImage}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
