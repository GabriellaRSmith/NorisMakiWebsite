import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      {/* Top: Logo */}
      <div className="center-logo">
        <Link to="/">NM</Link>
      </div>

      {/* Nav row */}
      <div className="nav-row">
        <div className="nav-left">
            {/* Mini logo on the left */}
            <Link to="/">
                <span className="mini-logo">NM</span>
            </Link>
        </div>     
           
        <nav className="nav-links">
          <Link to="/merchandise">Merchandise</Link>
          <Link to="/tickets">Tickets</Link>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('join')}>Join NM</button>
        </nav>

        <div className="header-icons">
          <Link to="/cart"><FaShoppingCart size={20} /></Link>
          <Link to="/login"><FaUser size={20} /></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
