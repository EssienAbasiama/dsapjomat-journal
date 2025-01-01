// MobileMessage.js
import React, { useEffect } from "react";
import "./mobileMessage.css";

const MobileMessage = () => {
  useEffect(() => {
    console.log("MobileMessage component is rendered");
  }, []);

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
        </div>
        <h2>Screen Too Small</h2>
        <p>
          The page you are looking requires a larger screen use a
          <br />
          <strong>PC</strong> or <strong>Tablet</strong>
        </p>
        <a href="/">Go Home</a>
      </div>
    </div>
  );
};

export default MobileMessage;
