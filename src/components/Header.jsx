import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";

function Header({ show }) {
  return (
    <>
      <header id="header-wrap">
        <div className="navigation">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#">
                <img
                  src="/src/assets/logo.png"
                  alt="Logo"
                  style={{ width: "50px", height: "50px" }}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="navbar-collapse collapse show"
                id="navbarSupportedContent"
                style={{}}
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="page-scroll" href="">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="page-scroll" href="">
                      ABOUT US
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="page-scroll" href="">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="btn-sing d-none d-sm-block active flex">
                <a className="btn btn-border page-scroll" href="/register">
                  SignUp
                </a>
              </div>
            </nav>
          </div>
        </div>
        {show && <Hero />}
      </header>
    </>
  );
}

export default Header;
