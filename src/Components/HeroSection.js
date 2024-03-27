import React from "react";
import HeroImg from "../img/HeroImg.png";
export const HeroSection = () => {
  return (
    <section className="Hero-Section container-fluid">
      <div className="row  row-cols  ">
        <div className="col-md-5 Hero-Left-Card   " data-aos="zoom-in-up">
          <div className="card h-100 ">
            <div className="card-body">
              <h4 className="card-title text-muted">Hello, i’m</h4>
              <h2 className="card-title ">
                <span>Jone Cena</span>
              </h2>
              <h2 className="card-title">web designer</h2>
              <p className="card-title text-center">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ultrices elit sed mollis dictum. Suspendisse magna nisi,
                consectetur non tellus quis, malesuada efficitur erat. Donec
                odio sapien,
              </p>

              <div className="row  row-cols  ">
                <div className="col Hero-Card " data-aos="zoom-in-up">
                  <div className="card h-100 ">
                    <div className="card-body">
                      <button className="btn btn-warning">Hire Me</button>
                    </div>
                  </div>
                </div>

                <div className="col Hero-Card " data-aos="zoom-in-up">
                  <div className="card h-100 ">
                    <div className="card-body">
                      <button className="btn btn-warning">Hire Me</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5 Hero-Middle-Card " data-aos="zoom-in-up">
          <div className="card h-100 ">
            <div className="card-body">
              <img src={HeroImg} className="img-fluid rounded-start " alt="" />
            </div>
          </div>
        </div>

        <div className="col Hero-Right-Card  " data-aos="zoom-in-up">
          <div className="card ">
            <img src="" className="img-fluid rounded-start " alt="" />
            <div className="card-body">
              <h3 className="card-title text-center"><span>13+</span>  </h3>
              <p className="card-title text-center">Years Of Experience</p>
   

              <h3 className="card-title text-center"><span>9K+</span>  </h3>
              <p className="card-title text-center">Project Complete</p>


              <h3 className="card-title text-center"><span>99%</span>  </h3>
              <p className="card-title text-center">Client Satisfactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
