import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './footer.scss';
import PHILOGO from "./logo.png"

function Footer() {

  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-logo">
                <img src={PHILOGO} alt="Phinexa Logo" className="logo-image"/>
            </div>
     <nav className="footer-nav">
         <div className="nav-group">
            <a href="https://phinexa-881b9.web.app/">Home</a>
             <a href="https://phinexa-881b9.web.app/solutions">Solutions</a>
             <a href="https://phinexa-881b9.web.app/what-we-do">What We Do</a>
             <a href="https://phinexa-881b9.web.app/our-approach">Our Approach</a>
        </div>
    <div className="nav-group">
        <a href="https://phinexa-881b9.web.app/industries">Industry</a>
        <a href="https://phinexa-881b9.web.app/careers">Careers</a>
        <a href="https://phinexa-881b9.web.app/about">About</a>
        <a href="https://phinexa-881b9.web.app/contact">Contact</a>
    </div>
</nav>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2023 Phinexa. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer