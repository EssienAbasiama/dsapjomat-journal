import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import logo from "/src/assets/logo.png";
import { isAuthenticated } from "../utility/authUtils";
import { useNavigate, useLocation } from "react-router-dom";

function Header({ show }) {
  // State to manage active dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  // Refs for the dropdowns
  const dropdownRefs = [useRef(null), useRef(null)];

  // Toggle dropdown
  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (
      dropdownRefs.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      )
    ) {
      setActiveDropdown(null);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const checkAuthentication = async () => {
      const authStatus = await isAuthenticated();
      setIsAuth(authStatus);
    };

    checkAuthentication();
  }, [navigate]);
  return (
    <>
      <header id="header-wrap">
        <div className="navigation">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img
                  src={logo}
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
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="page-scroll" href="/">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="page-scroll" href="/about-us">
                      ABOUT US
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="page-scroll" href="/contact-us">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="/journal">
                      Journal
                    </a>
                  </li>

                  {/* First Dropdown */}
                  <li
                    className="nav-item dropdown"
                    ref={dropdownRefs[0]}
                    style={{ position: "relative" }}
                  >
                    <a
                      className="page-scroll dropdown-toggle"
                      onClick={() => toggleDropdown(0)}
                      style={{ cursor: "pointer" }}
                    >
                      Journal Info
                    </a>
                    <AnimatePresence>
                      {activeDropdown === 0 && (
                        <motion.ul
                          className="dropdown-menu show"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{
                            position: "absolute",
                            background: "white",
                            listStyle: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="/editorial-board"
                            >
                              EDITORIAL BOARD
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/news">
                              NEWS
                            </a>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* Second Dropdown */}
                  <li
                    className="nav-item dropdown"
                    ref={dropdownRefs[1]}
                    style={{ position: "relative" }}
                  >
                    <a
                      className="page-scroll dropdown-toggle"
                      onClick={() => toggleDropdown(1)}
                      style={{ cursor: "pointer" }}
                    >
                      Publications
                    </a>
                    <AnimatePresence>
                      {activeDropdown === 1 && (
                        <motion.ul
                          className="dropdown-menu show"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{
                            position: "absolute",
                            background: "white",
                            listStyle: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <li>
                            <a className="dropdown-item" href="/author">
                              Submit Manuscript
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/general-info">
                              Engineering and Technology
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/journal-policy">
                              Applied Science
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/terms">
                              Social Science
                            </a>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                </ul>
              </div>
              {isAuth ? (
                <div className="btn-sing d-none d-sm-block active flex">
                  <a className="btn btn-border page-scroll" href="/register">
                    Manuscript dashboard
                  </a>
                </div>
              ) : (
                <div className="btn-sing d-none d-sm-block active flex">
                  <a className="btn btn-border page-scroll" href="/register">
                    SignUp
                  </a>
                </div>
              )}
            </nav>
          </div>
        </div>
        {show && <Hero />}
      </header>
    </>
  );
}

export default Header;
