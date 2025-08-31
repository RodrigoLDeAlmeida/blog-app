import React from "react";
import Logo from "../img/logo.jpeg";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        fontSize: "14px",
        color: "#555",
      }}
    >
      <img src={Logo} alt="Company Logo" style={{ height: "24px" }} />
      <span>
        Made with <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
