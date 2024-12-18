import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";

function Header({ show }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Ref for the dropdown and its trigger
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header id="header-wrap">
        <div className="navigation">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
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

                  {/* Journal Info with Dropdown */}
                  <li className="nav-item dropdown" ref={dropdownRef}>
                    <a
                      className="page-scroll dropdown-toggle"
                      href="#"
                      onClick={toggleDropdown}
                      style={{ cursor: "pointer" }}
                    >
                      Journal Info
                    </a>

                    {/* Dropdown Menu with Framer Motion */}
                    <AnimatePresence>
                      {isDropdownVisible && (
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
                          {/* <li>
                            <a className="dropdown-item" href="/general-info">
                              General Information
                            </a>
                          </li> */}
                          <li>
                            <a className="dropdown-item" href="/journal-policy">
                              EDITORIAL BOARD
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/terms">
                              NEWS
                            </a>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
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
