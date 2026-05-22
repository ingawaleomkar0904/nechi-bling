import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight, MessageCircle } from 'lucide-react';
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
    { title: 'Neckpieces', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80', path: '/shop?cat=neckpieces' },
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
            <div className="brand-badge">ESTD 2026</div>
            <h1>Wear the Joy</h1>
            <p className="hero-description">
              Elegant Indian heritage meets modern craftsmanship. Hand-picked imitation jewellery for your daily sparkle and festive grace.
            </p>
            <div className="hero-ctas">
              <a href="https://wa.me/911234567890" className="btn btn-primary">
                <MessageCircle size={18} style={{ marginRight: '8px' }} />
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

      <section id="categories" className="categories">
        <div className="container">
          <div className="section-header">
            <h2 className="serif">Featured Categories</h2>
            <p>Handpicked selections for every occasion</p>
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
                    <a href={cat.path} className="btn-shop">Shop {cat.title} <ChevronRight size={16} /></a>
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
          <div className="cta-box">
            <h2 className="serif">Drop us a quick WhatsApp message — we'll help you pick the right piece, confirm your order and have it lovingly packed within a day.</h2>
<p></p>
            <a href="https://wa.me/911234567890" className="btn btn-primary large-wa-btn">
              <MessageCircle size={24} style={{ marginRight: '12px' }} />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
