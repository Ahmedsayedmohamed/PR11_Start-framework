import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container d-flex justify-content-between align-items-center  py-3">
          <Link className="navbar-brand fs-2 fw-700" to="/hero">
          START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0 me-4">
              <li className="nav-item px-2">
                <NavLink className="nav-link text-uppercase fw-700 px-1" aria-current="page" to="/about">
                  about
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link text-uppercase fw-700 px-1" aria-current="page" to="/portfolio">
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link text-uppercase fw-700 px-1" aria-current="page" to="/contact">
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
