import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import WhatsAppIcon, { WHATSAPP_URL } from '../components/WhatsAppIcon';
import './Contact.css';
const INSTAGRAM_URL = 'https://instagram.com/nechi.bling';
const EMAIL = 'hello@nechibling.in';

const InstagramIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const contactMethods = [
  {
    title: 'WhatsApp',
    description: 'Fastest way to order or ask about availability.',
    link: WHATSAPP_URL,
    linkText: '+91 72489 14154',
    icon: <WhatsAppIcon />,
    iconClass: 'wa',
  },
  {
    title: 'Instagram',
    description: 'See new drops, reels, and styling ideas.',
    link: INSTAGRAM_URL,
    linkText: '@nechi.bling',
    icon: <InstagramIcon />,
    iconClass: 'ig',
  },
  {
    title: 'Email',
    description: 'For detailed enquiries and gifting requests.',
    link: `mailto:${EMAIL}`,
    linkText: EMAIL,
    icon: <Mail size={22} strokeWidth={1.5} />,
    iconClass: 'mail',
  },
];

const Contact = () => {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-label">Contact</span>
            <h1 className="page-title">We&apos;d love to hear from you.</h1>
            <p className="page-desc">
              Questions, custom orders, gifting help — drop us a message and we&apos;ll reply soon.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-methods">
        <div className="container">
          <div className="contact-cards-grid">
            {contactMethods.map((method, index) => (
              <motion.article
                key={method.title}
                className="contact-method-card surface-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                  <div className={`icon-circle icon-circle--${method.iconClass}`}>{method.icon}</div>
                  <h3 className="body-heading">{method.title}</h3>
                <p>{method.description}</p>
                <a
                  href={method.link}
                  target={method.link.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="contact-method-link"
                >
                  {method.linkText}
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-address">
        <div className="container">
          <motion.div
            className="contact-address-card surface-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="icon-circle icon-circle--maroon">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="body-heading">Home-based atelier</h3>
              <p>
                Flat #1302, E-Wing, AARCON,
                <br />
                Gaikwad Nagar, Punawale, Pimpri-Chinchwad, Pune-411033
              </p>
              <span className="contact-address-note">India · Local pickup available on request</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <motion.div
            className="cta-maroon"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif">Say hello on WhatsApp</h2>
            <p>We usually reply within an hour during the day.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="wa-btn wa-btn--lg">
              <WhatsAppIcon size={20} />
              Start WhatsApp chat
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
