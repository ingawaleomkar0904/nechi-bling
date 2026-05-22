import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.png';

const INSTAGRAM_URL = 'https://instagram.com/nechi.bling';

const InstagramIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About Us' },
  { to: '/how-to-order', label: 'How to Order' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src={logo} alt="Nechi Bling Logo" className="logo-img" />
        </Link>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} onClick={closeMenu}>
                {label}
              </NavLink>
            </li>
          ))}
          <li className="mobile-only social-mobile">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="desktop-only social-icon"
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </a>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
