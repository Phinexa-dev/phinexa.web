import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [linkAnimation, setLinkAnimation] = useState(false);
  const [isScaled, setIsScaled] = useState(false);

  const handleLogoClick = () => {
    setIsOpen(!isOpen);
    setLinkAnimation(true);
    if (!isScaled) {
      setIsScaled(true);
      setTimeout(() => {
        setIsScaled(false);
      }, 250);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
        <nav className={isOpen ? 'open' : ''}>
          <div className="background layer-two"></div>
          <div className="background"></div>
          <div className={`logo ${isScaled ? 'scaled' : ''}`} onClick={handleLogoClick}>
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Logo" onClick={handleLogoClick}/>
          </div>
          <ul className={linkAnimation ? 'animate' : ''}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/solutions"  onClick={closeMenu}>Solutions</Link>
            </li>
            <li>
              <Link to="/contact">What We do</Link>
            </li>
            <li>
              <Link to="/our-approach" onClick={closeMenu}>Our Approach</Link>
            </li>
            <li>
              <Link to="/contact">Industries</Link>
            </li>
            <li>
              <Link to="/contact">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="right-logo">
            <img src={process.env.PUBLIC_URL + '/images/logo-full.svg'} alt="Logo"/>
          </div>
        </nav>
    </header>
  )
}

export default Navbar