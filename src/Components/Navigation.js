import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export const Navigation = () => {
  return (
    <section className="Navigation ">
      <nav className="navbar navbar-expand-sm navbar-dark ">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="Home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="AboutPage">
                About Page
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="ServicePage">
                Service Page
              </Link>
            </li>

        

            <li className="nav-item">
              <Link className="nav-link" to="ProjectsPage">
                Projects Page
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="ContactPage">
                Contact Page
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};
