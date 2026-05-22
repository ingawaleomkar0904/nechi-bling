import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart } from 'lucide-react';
import './About.css';
import logo from '../assets/logo.png';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-logo-stamp">
              <img src={logo} alt="Nechi Bling Logo" />
            </div>
            <h1 className="serif">About Nechi Bling</h1>
            <div className="gold-divider"></div>
            <p className="subtitle">Nechi = Neha + Prachi</p>
            
            <div className="story-text">
              <p>
                Nechi Bling is more than just a jewellery brand—it is a reflection of the bond 
                between two sisters and their shared love for Indian aesthetics blended with modern design.
              </p>
              <p>
                Founded by Neha and Prachi, both corporate IT professionals, Nechi Bling began 
                as a small home-based venture inspired by the women around them in their own neighbourhood. 
                Balancing full-time careers with a passion for creativity, they envisioned a brand that 
                offers boutique-style imitation jewellery that is elegant, affordable, and easy to trust.
              </p>
              <p>
                Every piece at Nechi Bling is thoughtfully handpicked with a focus on quality, 
                comfort, and everyday wearability. Our jewellery is designed to complement 
                daily outfits as well as special moments—without the premium price tag.
              </p>
              <p>
                At its heart, Nechi Bling celebrates confidence, simplicity, and joy.
                Just as our tagline says—<strong>Wear the Joy</strong>—because feeling special 
                shouldn’t be reserved for special occasions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="story-section">
        <div className="container story-grid">
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" alt="Neha and Prachi - Founders" className="founders-img" />
          </div>
          <div className="story-text">
            <div className="values">
              <div className="value-item">
                <span className="serif">Trust</span>
                <p>Ensuring quality and durability in every piece.</p>
              </div>
              <div className="value-item">
                <span className="serif">Affordability</span>
                <p>Premium aesthetics for every budget.</p>
              </div>
              <div className="value-item">
                <span className="serif">Heritage</span>
                <p>Rooted in Maharashtrian tradition with a modern soul.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-grown">
        <div className="container">
          <div className="banner-content">
            <h2 className="serif">Home-Grown & Women-Led</h2>
            <p>By small business lovers, for small business lovers. We take pride in our roots and the personal touch we bring to every order.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
