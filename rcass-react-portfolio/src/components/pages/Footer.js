import React from "react";
import "../../assets/styles/bootstrap.css";

export default function MyComponent() {
  return (
    <div>
      {/* Your component code here */}

      <footer
        className="bg-dark"
        style={{
          backgroundColor: "grey",
          color: "white",
          textAlign: "center",
          padding: "20px",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div className="row">
            <div className="col">
              <a href="https://github.com/rcass13" target="_blank">
                <img
                  src="https://img.icons8.com/color/48/000000/github-2.png"
                  alt="Github"
                  className="icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rose-cassidy-1b1b57225/"
                target="_blank"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/linkedin.png"
                  alt="LinkedIn"
                  className="icon"
                />
              </a>
              <a href="https://www.instagram.com/rose_cassidy13/" target="_blank">
                <img
                  src="https://img.icons8.com/color/48/000000/instagram.png"
                  alt="Twitter"
                  className="icon"
                />
              </a>
        
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="mb-0">
                Copyright &copy; {new Date().getFullYear()}{" "}  All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
