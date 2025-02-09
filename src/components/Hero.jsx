/* eslint-disable no-unused-vars */
import React from "react";
import hero from "/src/assets/hero.svg";
import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <h2
      className="head-title wow fadeInUp animated"
      style={{ visibility: "visible" }}
    >
      Advancing Knowledge and Research with
      <br />
      Solutions to{" "}
      <motion.span
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "200% 50%" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "linear-gradient(90deg, #163bb5, #ff5733, #163bb5)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
          display: "inline-block",
        }}
      >
        Socio-Economic and Global Challenges
      </motion.span>
    </h2>
  );
};

function Hero() {
  return (
    <div id="hero-area" className="hero-area-bg">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="contents text-center">
              <AnimatedText />
              <p
                className="text-center text-lg "
                style={{
                  color: "#000",
                  marginBottom: "30px",
                  fontWeight: "400",
                }}
              >
                Empowering innovation and fostering groundbreaking solutions to
                address pressing global and socio-economic challenges. We bridge
                <br />
                the gap between knowledge and real-world impact through
                cutting-edge research and transformative initiatives.
              </p>

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
                <a href="/journal" rel="nofollow" className="btn btn-common">
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
              <img className="img-fluid" src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
