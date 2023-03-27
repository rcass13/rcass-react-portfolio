import React from 'react';
import { Navbar } from 'react-bootstrap';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    // <Navbar className="justify-content-center align-items-center">
      <ul className="navbar navbar-expand-lg bg-dark nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={`nav-link ${currentPage === 'Home' ? 'active bg-secondary text-primary' : ''}`}
          >
            ROSE CASSIDY
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={`nav-link ${currentPage === 'Portfolio' ? 'active bg-secondary text-primary' : ''}`}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            className={`nav-link ${currentPage === 'Resume' ? 'active bg-secondary text-primary' : ''}`}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={`nav-link ${currentPage === 'Contact' ? 'active bg-secondary text-primary' : ''}`}
          >
            Contact
          </a>
        </li>
      </ul>
    /* </Navbar> */
  );
}

export default NavTabs;


