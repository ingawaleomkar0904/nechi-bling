import { Link } from 'react-router-dom';
import { Phone, Instagram, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          {/* Left: Brand */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src={logo} alt="Nechi Bling Logo" className="footer-logo" />
              <div className="footer-brand-text">
                <span className="footer-brand-name serif">Nechi Bling</span>
                <span className="footer-tagline">WEAR THE JOY</span>
              </div>
            </div>
            <p className="footer-description">
              A home-grown, women-led atelier crafting elegant imitation jewellery for everyday joy, festive sparkle and thoughtful gifting.
            </p>
          </div>

          {/* Middle: Explore Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/how-to-order">How to Order</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Right: Stay in Touch */}
          <div className="footer-contact">
            <h4 className="footer-heading">Stay in touch</h4>
            <ul>
              <li>
                <Phone size={16} className="footer-contact-icon" />
                <span>+91 72489 14154</span>
              </li>
              <li>
                <Instagram size={16} className="footer-contact-icon" />
                <span>@nechi.bling</span>
              </li>
              <li>
                <Mail size={16} className="footer-contact-icon" />
                <span>hello@nechibling.in</span>
              </li>
              <li>
                <MapPin size={16} className="footer-contact-icon" />
                <span>Home-based atelier · India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; 2026 Nechi Bling. Handcrafted with care in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
