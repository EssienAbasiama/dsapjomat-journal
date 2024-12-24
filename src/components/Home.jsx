/* eslint-disable no-unused-vars */
import React from "react";

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import Testimonial from "./Testimonials";

function Home() {
  return (
    <div>
      {/* <Header /> */}

      <Testimonial />

      <section id="contact" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center">
                <h2
                  className="section-title wow fadeInDown animated"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    WebkitAnimationDelay: "0.3s",
                    MozAnimationDelay: "0.3s",
                    animationDelay: "0.3s",
                  }}
                >
                  Contact
                </h2>
              </div>
            </div>
          </div>
          <div
            className="row contact-form-area wow fadeInUp animated"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              WebkitAnimationDelay: "0.4s",
              MozAnimationDelay: "0.4s",
              animationDelay: "0.4s",
            }}
          >
            <div className="col-md-7 col-lg-6 col-sm-12">
              <div className="contact-block">
                <h2>Contact Form</h2>
                <form id="contactForm" noValidate="true">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required=""
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Email"
                          id="email"
                          className="form-control"
                          name="email"
                          required=""
                          data-error="Please enter your email"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          id="msg_subject"
                          className="form-control"
                          required=""
                          data-error="Please enter your subject"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          rows="5"
                          data-error="Write your message"
                          required=""
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="submit-button">
                        <button
                          className="btn btn-common disabled"
                          id="form-submit"
                          type="submit"
                          style={{ pointerEvents: "all", cursor: "pointer" }}
                        >
                          Send Message
                        </button>
                        <div
                          id="msgSubmit"
                          className="h3 text-center hidden"
                        ></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 col-lg-6 col-sm-12">
              <div
                className="contact-right-area wow fadeIn animated"
                style={{ visibility: "visible" }}
              >
                <h2>Get In Touch</h2>
                <div className="contact-right">
                  <div className="single-contact">
                    <div className="contact-icon">
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <p>Skopje, Macedonia</p>
                  </div>
                  <div className="single-contact">
                    <div className="contact-icon">
                      <FaEnvelope size={18} />
                    </div>
                    <p>
                      <a href="mailto:email@gmail.com">email@gmail.com</a>
                    </p>
                    <p>
                      <a href="mailto:tomsaulnier@gmail.com">
                        tomsaulnier@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="single-contact">
                    <div className="contact-icon">
                      <FaPhoneAlt size={18} />
                    </div>
                    <p>
                      <a href="tel:+423745967">+42 374 5967</a>
                    </p>
                    <p>
                      <a href="tel:+991235967">+99 123 5967</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
