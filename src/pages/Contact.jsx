import { motion } from 'framer-motion';
import { MessageCircle, FileText, MapPin } from 'lucide-react';
import './Contact.css';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="container">
          <h1 className="serif">Get in Touch</h1>
          <div className="gold-divider"></div>
          <p>We'd love to hear from you. Reach out for orders or enquiries.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon wa">
                <MessageCircle size={28} />
              </div>
              <div className="contact-detail">
                <h3>WhatsApp</h3>
                <p>Chat with us for orders and availability.</p>
                <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="contact-link">
                  +91 12345 67890
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon ig">
                <InstagramIcon size={28} />
              </div>
              <div className="contact-detail">
                <h3>Instagram</h3>
                <p>Follow us for the latest collection and updates.</p>
                <a href="https://instagram.com/nechibling" target="_blank" rel="noreferrer" className="contact-link">
                  @nechibling
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon loc">
                <MapPin size={28} />
              </div>
              <div className="contact-detail">
                <h3>Home Address</h3>
                <p>Flat #1302, E-Wing, AARCON,<br/>Gaikwad Nagar, Punawale, Pimapri-Chinchwad, Pune-33</p>
              </div>
            </div>
          </div>

          <div className="offline-form">
            <div className="form-promo">
              <FileText size={48} color="var(--primary-maroon)" strokeWidth={1} />
              <h2 className="serif">Join our Community</h2>
              <p>Prefer to stay updated offline? Fill out our customer detail form and we'll keep you in the loop!</p>
              <a href="https://forms.gle/placeholder" target="_blank" rel="noreferrer" className="btn btn-primary">
                Open Google Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-note">
        <div className="container">
          <p className="serif">Wait for the Joy to arrive.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
