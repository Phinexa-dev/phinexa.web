import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [linkAnimation, setLinkAnimation] = useState(false);
  const [isScaled, setIsScaled] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const ref = useRef();

  useEffect(() => {
    const pathname = location.pathname;
    const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);
    setActiveLink(lastSegment);
  }, [location.pathname]);

  useEffect(() => {
    // Function to handle click outside of the specified div
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // Clicked outside of the div, update the state
        setIsOpen(false);
      }
    }

    // Attach event listeners for both mouse and touch events
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    // Cleanup function to remove the event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref]);

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
        <nav 
        ref={ref}
        className={isOpen ? 'open' : ''}>
          <div
          className="background layer-two"></div>
          <div
          className="background"></div>
          <div 
          className={`logo ${isScaled ? 'scaled' : ''}`} onClick={handleLogoClick}>
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Logo" onClick={handleLogoClick}/>
          </div>
          <div className="mobile-logo">
            <img src={process.env.PUBLIC_URL + '/images/menu-' + (isOpen ? 'close' : 'open') + '.svg'} alt="logo-mobile" onClick={handleLogoClick} />
          </div>
          <ul 
          className={linkAnimation ? 'animate' : ''}>
            <li>
              <Link  to="/" onClick={closeMenu} className={activeLink === "" ? "active" : ""}>Home</Link>
            </li>
            <li>
              <Link to="/solutions"  onClick={closeMenu} className={activeLink === "solutions" ? "active" : ""}>Solutions</Link>
            </li>
            <li>
              <Link to="/what-we-do" onClick={closeMenu} className={activeLink === "what-we-do" ? "active" : ""}>What We do</Link>
            </li>
            <li>
              <Link to="/our-approach" onClick={closeMenu} className={activeLink === "our-approach" ? "active" : ""}>Our Approach</Link>
            </li>
            <li>
              <Link to="/industries" onClick={closeMenu} className={activeLink === "industries" ? "active" : ""}>Industries</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu} className={activeLink === "about" ? "active" : ""}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu} className={activeLink === "contact" ? "active" : ""}>Contact</Link>
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