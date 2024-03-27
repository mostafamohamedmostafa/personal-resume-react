import React from "react";
import { ClientsData } from "./WebsiteData";
export const ClientsSection = () => {
  return (
    <section className="Clients-Section container-fluid">
      <h1 className="text-center">
        I’ve 12345+ Clients <span> Problem Solutions </span>
      </h1>

      <div className="row  row-cols  ">
        {ClientsData.map((ClientsDataImported, index) => {
          return (
            <div
              className="col-md-3 col-6 g-4  "
              data-aos="zoom-in-up"
              key={index}
            >
              <div className="card  h-100 ">
                <img
                  className="img-fluid"
                  src={ClientsDataImported.ClientsImage}
                  alt={ClientsDataImported.ClientsImageALt}
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
