import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppIcon, { WHATSAPP_URL } from '../components/WhatsAppIcon';
import './Home.css';
import heroImg from '../assets/hero.png';
import banglesImg from '../assets/bangles.png';
import earringsImg from '../assets/earrings.png';
import logo from '../assets/logo.png';
import giftingImg from '../assets/gifting_image_1779443416146.png';

const Home = () => {
  const categories = [
    { title: 'Bangles', image: banglesImg, path: '/shop?cat=bangles' },
    { title: 'Earrings', image: earringsImg, path: '/shop?cat=earrings' },
    { title: 'Neckpieces', image: heroImg, path: '/shop?cat=neckpieces' },
    { title: 'Gifting', image: giftingImg, path: '/shop?cat=gifting' },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-logo-box">
              <img src={logo} alt="Nechi Bling Logo" className="hero-logo" />
            </div>
            <h1>Wear the Joy</h1>
            <p className="hero-description">
              Elegant Indian heritage meets modern craftsmanship. Hand-picked imitation jewellery for your daily sparkle and festive grace.
            </p>
            <div className="hero-ctas">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="wa-btn">
                <WhatsAppIcon size={18} />
                Order on WhatsApp
              </a>
              <a href="#categories" className="btn btn-outline">Explore Collection</a>
            </div>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="image-wrapper">
              <img src={heroImg} alt="Nechi Bling Signature Jewellery" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="intro-banner">
        <div className="container">
          <div className="intro-content">
            <h2 className="serif">A Sister-Owned Legacy</h2>
            <div className="gold-divider"></div>
            <p>
              Born from the creative bond of Neha and Prachi, <strong>Nechi Bling</strong> celebrates the Maharashtrian heritage with a contemporary soul. We believe premium jewellery should be accessible to every woman, everyday.
            </p>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item"><span className="trust-icon">✦</span><span>Handpicked</span></div>
            <div className="trust-item"><span className="trust-icon">✦</span><span>Affordable</span></div>
            <div className="trust-item"><span className="trust-icon">✦</span><span>Trusted</span></div>
            <div className="trust-item"><span className="trust-icon">✦</span><span>Lovingly Packed</span></div>
          </div>
        </div>
      </section>

      <section id="categories" className="categories">
        <div className="container">
          <div className="section-intro">
            <span className="page-label">Browse</span>
            <h2 className="serif">Featured Categories</h2>
            <p className="page-desc">Handpicked selections for every occasion</p>
          </div>
          <div className="category-grid">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                className="category-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="category-image">
                  <img src={cat.image} alt={cat.title} />
                  <div className="category-overlay">
                    <Link to={cat.path} className="btn-shop">Shop {cat.title} <ChevronRight size={16} /></Link>
                  </div>
                </div>
                <h3>{cat.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <section className="whatsapp-cta-section">
        <div className="container">
          <div className="cta-maroon">
            <h2 className="serif">Found something you love?</h2>
            <p>Drop us a quick WhatsApp message — we&apos;ll help you pick the right piece, confirm your order and have it lovingly packed within a day.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="wa-btn wa-btn--lg">
              <WhatsAppIcon size={22} />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
