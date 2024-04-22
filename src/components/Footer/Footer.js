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
                <a href="#">Home</a>
                <a href="#">Solutions</a>
                <a href="#">What We Do</a>
                <a href="#">Our Approach</a>
                <a href="#">Industry</a>
                <a href="#">Careers</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2023 Phinexa. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer