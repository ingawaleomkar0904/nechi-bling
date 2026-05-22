import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import WhatsAppIcon, { WHATSAPP_URL } from './WhatsAppIcon';
import logo from '../assets/logo.png';
import './Footer.css';

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="footer-contact-icon" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const INSTAGRAM_URL = 'https://instagram.com/nechi.bling';
const EMAIL = 'hello@nechibling.in';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src={logo} alt="Nechi Bling Logo" className="footer-logo" />
              <div className="footer-brand-text">
                <span className="footer-brand-name serif">
                  Nechi <span className="footer-brand-gold">Bling</span>
                </span>
                <span className="footer-tagline">WEAR THE JOY</span>
              </div>
            </div>
            <p className="footer-description">
              A home-grown, women-led atelier crafting elegant imitation jewellery for everyday joy, festive sparkle and thoughtful gifting.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading serif">Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/how-to-order">How to Order</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading serif">Stay in touch</h4>
            <ul>
              <li>
                <WhatsAppIcon size={16} className="footer-wa-icon" />
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">+91 72489 14154</a>
              </li>
              <li>
                <InstagramIcon />
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@nechi.bling</a>
              </li>
              <li>
                <Mail size={16} className="footer-contact-icon" strokeWidth={1.75} />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <MapPin size={16} className="footer-contact-icon" strokeWidth={1.75} />
                <span>Home-based atelier · India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; 2026 Nechi Bling. Handcrafted with care in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
