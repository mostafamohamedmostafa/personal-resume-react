import React from "react";
import Client1 from "../img/Client1.png";
import Client2 from "../img/Client2.png";
import Client3 from "../img/Client3.png";

export const ClientsTestimonialsSection = () => {
  return (
    <section className=" Clients-Testimonials-Section container-fluid">
      <div className="row  row-cols  ">
        <div className="col-lg-4 " data-aos="zoom-in-up">
          <div className="card h-100 ">
            <div className="card-body">
              <h5 className=" ">Clients Testimonials</h5>
              <h1>
                I’ve 12345+ Clients <span> Problem Solutions </span>
              </h1>
              <p>
                volutpat id velit. Nam neque sapien, euismod sed congue auctor,
                lobortis at lacus. Aenean viverra fringilla neque sed gravida.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-8 Clients-Testimonials-Section-Card " data-aos="zoom-in-up">
          <div className="card h-100 ">
            <div className="card-body">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="card">
                      <img src={Client1} className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <h3 className="card-title">Card title</h3>

                        <h5 className="card-title">Card title</h5>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card">
                    <img src={Client2} className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <h3 className="card-title">Card title</h3>

                        <h5 className="card-title">Card title</h5>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card">
                    <img src={Client3} className="card-img-top img-fluid" alt="..." />
                      <div className="card-body">
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <h3 className="card-title">Card title</h3>

                        <h5 className="card-title">Card title</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
