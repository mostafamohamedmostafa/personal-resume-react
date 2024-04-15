import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
export const PricingPackageSection = () => {
  return (
    <section className="Pricing-Package-Section container-fluid">
      <h4 className="text-center">Pricing Package</h4>
      <h1 className="text-center">
        {" "}
        Amazing <span> Pricing </span>For your Projects
      </h1>
      <div className="row  row-cols  ">
        <div className="col-lg-4 " data-aos="zoom-in-up">
          <div className="card h-100  card-Price text-center">
            <div class="card-head">
              <h3 className="card-title"> Basic Plan </h3>
              <h5 className="card-text">
                Try Out Basic Plan Save <span> 20%</span>
              </h5>
              <h2 className="card-title">
                <strong>
                  <span>33</span>{" "}
                </strong>
                /Month
              </h2>
            </div>

            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {" "}
                  <span>
                    <BsCheck2Circle />
                  </span>{" "}
                  An item
                </li>
                <li className="list-group-item">
                  <span>
                    <BsCheck2Circle />
                  </span>{" "}
                  A second item
                </li>
                <li className="list-group-item">
                  <span>
                    <BsCheck2Circle />
                  </span>{" "}
                  A third item
                </li>
                <li className="list-group-item">
                  {" "}
                  <BsCheck2Circle /> A fourth item
                </li>
                <li className="list-group-item">
                  <BsCheck2Circle /> fifth item
                </li>
                <li className="list-group-item">
                  <BsCheck2Circle /> And a Six one
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4 " data-aos="zoom-in-up">
          <div className="card h-100  text-center">
            <div class="card-head">
              <h3 className="card-title"> Standard Plan </h3>
              <h5 className="card-text ">
                Try Out Standard Plan Save <span> 20%</span>
              </h5>
              <h2 className="card-title">
                <strong>
                  <span>43</span>{" "}
                </strong>
                /Month
              </h2>
            </div>

            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {" "}
                  <span>
                    <BsCheck2Circle />
                  </span>{" "}
                  An item
                </li>
                <li className="list-group-item">
                  <span>
                    <BsCheck2Circle />
                  </span>{" "}
                  A second item
                </li>
                <li className="list-group-item">
                  <span>
                    <BsCheck2Circle />
                  </span>{" "}
                  A third item
                </li>
                <li className="list-group-item">
                  <span>
                    <BsCheck2Circle />
                  </span>
                  A fourth item
                </li>
                <li className="list-group-item">
                  <span>
                    <BsCheck2Circle />
                  </span>
                  fifth item
                </li>
                <li className="list-group-item">
                  <BsCheck2Circle /> And a Six one
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4 " data-aos="zoom-in-up">
          <div className="card h-100  text-center">
            <div class="card-head">
              <h3 className="card-title"> Gold Plan </h3>
              <h5 className="card-text ">
                Try Out Gold Plan Save <span> 40%</span>
              </h5>
              <h2 className="card-title">
                <strong>
                  <span>55</span>{" "}
                </strong>
                /Month
              </h2>
            </div>

            <div className="card-body">
              {" "}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {" "}
                  <span>
                    <BsCheck2Circle />
                  </span>{" "}
                  An item
                </li>
                <li className="list-group-item">
                  <span>
                    <BsCheck2Circle />
                  </span>{" "}
                  A second item
                </li>
                <li className="list-group-item">
                  <span>
                    <BsCheck2Circle />
                  </span>{" "}
                  A third item
                </li>
                <li className="list-group-item">
                  <span>
                    <BsCheck2Circle />
                  </span>
                  A fourth item
                </li>
                <li className="list-group-item">
                  <span>
                    <BsCheck2Circle />
                  </span>
                  fifth item
                </li>
                <li className="list-group-item">
                  <span>
                    <BsCheck2Circle />
                  </span>{" "}
                  And a Six one
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
