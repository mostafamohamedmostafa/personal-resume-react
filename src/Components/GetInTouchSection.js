import React from "react";
import { BsMap } from "react-icons/bs";
import { BsPhoneVibrate } from "react-icons/bs";
import { BsEnvelopeOpenHeart } from "react-icons/bs";
export const GetInTouchSection = () => {
  return (
    <section className="Get-In-Touch-Section container-fluid">
      <div className="row  row-cols  ">
        <div className="col-lg-6 " data-aos="zoom-in-up">
          <div className="card h-100 ">
            <h4 className="text-center">Get In Touch</h4>
            <h1 className="text-center">
              Let’s Talk For your <span>Next Projects </span>{" "}
            </h1>
            <div className="card-body">
              <ul className=" ">
                <h3>
                  <li className="list-group-item">
                    <span>
                      <BsMap />
                    </span>{" "}
                    Location : Alexandria Egypt
                  </li>
                </h3>
                <h3>
                  <li className="list-group-item">
                    <span>
                      <BsPhoneVibrate />
                    </span>{" "}
                    Phone Number <a href="tel:+201110457203">01110457203</a>{" "}
                  </li>
                </h3>
                <h3>
                  {" "}
                  <li className="list-group-item">
                    <span>
                      {" "}
                      <BsEnvelopeOpenHeart />
                    </span>{" "}
                    Email{" "}
                    <a href="mailto: dev.moustapha@gmail.com">
                      Send Email
                    </a>{" "}
                  </li>
                </h3>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-6 " data-aos="zoom-in-up">
          <div className="card h-100 ">
            <div className="card-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218359.75267862238!2d29.790070717964728!3d31.224299392628375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1711513770538!5m2!1sen!2seg"
                width="300"
                height="350"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
