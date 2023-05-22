import React from "react";


export const Header = () => {
  return (
    <header className="container-fluid p-2 bg-secondary">
      <div className="row d-flex justify-content-between align-items-center">
        <span className="col-auto display-6 p-2 text-light">Start Bootstrap</span>
        <nav className=" col-auto navbar navbar-expand-lg">
          <button
            className="navbar-toggler text-white-50"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white-50"></span>
          </button>
          <div className="col-auto collapse navbar-collapse me-5" id="navbarNav">
            <ul className=" navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white-50" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50" href="">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50" href="">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50" href="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};


