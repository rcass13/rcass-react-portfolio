import React from "react";
import Resume from "../assets/misc/Rose-Cassidy-Resume.docx";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul
      style={{
        display: "flex",
        width: "100%",
        height: "fit-content",
        paddingRight: '30px',
        paddingLeft: '30px',
        justifyContent: "space-between", // Spread out the navbar items
      }}
      className="navbar navbar-expand-lg bg-dark nav nav-tabs"
    >
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={`nav-link ${
            currentPage === "Home" ? "active bg-secondary text-primary" : ""
          }`}
        >
          ROSE CASSIDY
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={`nav-link ${
            currentPage === "Portfolio"
              ? "active bg-secondary text-primary"
              : ""
          }`}
        >
          Portfolio
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={`nav-link ${
            currentPage === "Contact" ? "active bg-secondary text-primary" : ""
          }`}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href={Resume}
          download
          className={`nav-link ${
            currentPage === "Resume" ? "active bg-secondary text-primary" : ""
          }`}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
