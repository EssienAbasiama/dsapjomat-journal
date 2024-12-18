/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer-area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="footer-logo mb-3">
                <img
                  src="/src/assets/logo.png"
                  alt="Logo"
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
              <p className="description">
                Advancing Knowledge Through Educative, Informative, and
                Technological Solutions to Global Challenges.
              </p>
            </div>

            {/* Company Section */}
            <div
              className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <h3 className="footer-title">Company</h3>
              <ul>
                <li>
                  <a href="#">Press Releases</a>
                </li>
                <li>
                  <a href="#">Mission</a>
                </li>
                <li>
                  <a href="#">Strategy</a>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div
              className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <h3 className="footer-title">About</h3>
              <ul>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Clients</a>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div
              className="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <h3 className="footer-title">Find us on</h3>
              <div className="social-icon">
                <a className="facebook" href="#">
                  <FaFacebookF />
                </a>
                <a className="twitter" href="#">
                  <FaTwitter />
                </a>
                <a className="instagram" href="#">
                  <FaInstagram />
                </a>
                <a className="linkedin" href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                Copyright © 2024 D.S Adegbenro ICT Polytechnic Journal of
                Management, Applied Sciences and Technology(JOMAT) All Right
                Reserved
              </p>
            </div>
          </div>
        </div>
      </section>

      <a href="" className="back-to-top" style={{ display: "none" }}>
        <FontAwesomeIcon icon={faArrowUp} />
      </a>

      <div id="preloader" style={{ display: "none" }}>
        <div className="loader" id="loader-1"></div>
      </div>
    </>
  );
};

export default Footer;
