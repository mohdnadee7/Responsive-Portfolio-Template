import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
function Header() {
  const [state, setState] = useState({
    className: 'hide',
    property: 'false'
  });
  const navbarToggler=()=>{
    setState({
      className: 'show',
      property: 'true'
    });
  }
    return (
        <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand text-white" href="#home-section">Nadeem</a>
          <button class="navbar-toggler" onClick={navbarToggler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded='false' aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} className="navbar-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link custom-nav-link text-white" href="#">Home</a>
              <a class="nav-link custom-nav-link text-white" href="#about-section">About</a>
              <a class="nav-link custom-nav-link text-white" href="#resume-section">Resume</a>
              <a class="nav-link custom-nav-link text-white" href="#service-section">Services</a>
              <a class="nav-link custom-nav-link text-white" href="#skill-section">Skills</a>
              <a class="nav-link custom-nav-link text-white" href="#project-section">Projects</a>
              <a class="nav-link custom-nav-link text-white" href="#contact-section">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
}
export default Header;
