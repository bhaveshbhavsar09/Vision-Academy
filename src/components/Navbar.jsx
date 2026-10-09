import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/logo.webp" alt="Vision Academy Logo" className="logo-img" />
          Vision<span>Academy</span>
        </Link>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/programs" className={({ isActive }) => (isActive ? 'active' : '')}>
              Programs
            </NavLink>
          </li>
          <li>
            <NavLink to="/admissions" className={({ isActive }) => (isActive ? 'active' : '')}>
              Admissions
            </NavLink>
          </li>
        </ul>
        <Link to="/admissions" className="btn btn-primary nav-cta">
          Apply Now
        </Link>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
}
