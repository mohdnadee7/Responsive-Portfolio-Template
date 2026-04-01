import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes, faHome,faInfoCircle,faIdCard,faCogs,faTrophy,faProjectDiagram,faAddressBook} from '@fortawesome/free-solid-svg-icons';
function Header() {
  const [state, setState] = useState({
    className: 'hide',
    areaExpand: 'false'
  });
  const [crossToggle , setCrossToggle] = useState({areaExpand:'none', hederIcon:'none'});
  const navbarToggler=()=>{
if(state.areaExpand==='true' && state.className ==='show'){
  setState({
    className: 'hide',
    areaExpand: 'false'
  });
  setCrossToggle({areaExpand:'none',hederIcon:'none'})
}
else{
    setState({
      className: 'show',
      areaExpand: 'true'
    });
    setCrossToggle({areaExpand:'block',hederIcon:''})
  }
  }
  const navbarIcons=()=>{
    setState({
      className: 'hide',
      areaExpand: 'false'
    });
    setCrossToggle({areaExpand:'none',hederIcon:'none'})
  }
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand text-white" href="#home-section">Nadeem</a>
          <button className="navbar-toggler" onClick={navbarToggler} type="button" data-bs-toggle="collapse" aria-controls="navbarNavAltMarkup" aria-expanded={state.areaExpand} aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} className="navbar-icon" />
          </button>
          <div className="mobile-cross-icon" onClick={navbarToggler} style={{display:crossToggle.areaExpand}}> <FontAwesomeIcon icon={faTimes} className="navbar-icon" /></div>
          <div className={`collapse navbar-collapse ${state.className}`}>
            <div className="navbar-nav">
              <a className="nav-link custom-nav-link text-white" onClick={navbarIcons} href="#home-section"><FontAwesomeIcon icon={faHome} style={{display:crossToggle.hederIcon}} className="navbar-icon" /> Home</a>
              <a className="nav-link custom-nav-link text-white" onClick={navbarIcons} href="#about-section"><FontAwesomeIcon  icon={faInfoCircle} style={{display:crossToggle.hederIcon}} className="navbar-icon" /> About</a>
              <a className="nav-link custom-nav-link text-white" onClick={navbarIcons} href="#resume-section"><FontAwesomeIcon icon={faIdCard} style={{display:crossToggle.hederIcon}} className="navbar-icon" /> Resume</a>
              <a className="nav-link custom-nav-link text-white" onClick={navbarIcons} href="#service-section"><FontAwesomeIcon icon={faCogs} style={{display:crossToggle.hederIcon}} className="navbar-icon" /> Services</a>
              <a className="nav-link custom-nav-link text-white" onClick={navbarIcons} href="#skill-section"><FontAwesomeIcon icon={faTrophy} style={{display:crossToggle.hederIcon}} className="navbar-icon" /> Skills</a>
              <a className="nav-link custom-nav-link text-white" onClick={navbarIcons} href="#project-section"><FontAwesomeIcon icon={faProjectDiagram} style={{display:crossToggle.hederIcon}} className="navbar-icon" /> Projects</a>
              <a className="nav-link custom-nav-link text-white" onClick={navbarIcons} href="#contact-section"><FontAwesomeIcon icon={faAddressBook} style={{display:crossToggle.hederIcon}} className="navbar-icon" /> Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
}
export default Header;
