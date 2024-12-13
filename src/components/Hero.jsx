/* eslint-disable no-unused-vars */
import React from "react";

function Hero() {
  return (
    <div id="hero-area" className="hero-area-bg">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="contents text-center">
              <h2
                className="head-title wow fadeInUp animated"
                style={{ visibility: "visible" }}
              >
                Advancing Knowledge and Research with
                <br />
                Solutions to Socio-Economic and Global Challenges
              </h2>
              <div
                className="header-button wow fadeInUp animated"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDelay: "0.3s",
                  MozAnimationDelay: "0.3s",
                  animationDelay: "0.3s",
                }}
              >
                <a href="" rel="nofollow" className="btn btn-common">
                  Start Reading
                </a>
              </div>
            </div>
            <div
              className="img-thumb text-center wow fadeInUp animated"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                WebkitAnimationDelay: "0.6s",
                MozAnimationDelay: "0.6s",
                animationDelay: "0.6s",
              }}
            >
              <img className="img-fluid" src="/src/assets/hero.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
