import React from "react";

const Navbar = () => {
  return (

    <nav className="navbar">
      <div className="navbar-brand">
        <span>Sayed Nowshad</span>
      </div>

      <ul className="nav-links">
        
        <li><a href="#home">About Me</a></li>
        <li><a href="#contact">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        
      </ul>

    </nav>

  );
};

export default Navbar; 