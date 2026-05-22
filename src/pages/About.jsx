import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles, Heart, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';
import './About.css';

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    description:
      'Every piece is hand-checked for finish, comfort, and durability — so you can wear it with confidence, day after day.',
  },
  {
    icon: Sparkles,
    title: 'Affordability',
    description:
      'Boutique-style elegance without the boutique price tag. Premium looks that respect your budget.',
  },
  {
    icon: Heart,
    title: 'Heritage',
    description:
      'Inspired by Maharashtrian tradition, styled for modern life — jewellery that feels personal, not generic.',
  },
];

const About = () => {
  return (
    <div className="page-shell">
      <section className="page-hero about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-logo-stamp">
              <img src={logo} alt="Nechi Bling Logo" />
            </div>
            <h1 className="serif">About Nechi Bling</h1>
            <div className="gold-divider" />
            <p className="about-subtitle">Nechi = Neha + Prachi</p>

            <div className="story-text surface-card">
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
                shouldn&apos;t be reserved for special occasions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-intro">
            <span className="page-label">What we stand for</span>
            <h2 className="serif">Built on care, craft, and connection</h2>
          </div>
          <div className="about-values-grid">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="about-value-card surface-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="icon-circle icon-circle--gold">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-banner">
        <div className="container">
          <motion.div
            className="cta-maroon"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="page-label page-label--light">Our promise</span>
            <h2 className="serif">Home-grown & women-led</h2>
            <p>
              By small-business lovers, for small-business lovers. From selection to packaging,
              every order carries the personal touch of a sister-owned atelier in Pune.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <motion.div
            className="about-cta-inner surface-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="serif">Ready to find your sparkle?</h2>
              <p>Browse our collection or say hello — we&apos;d love to help you choose.</p>
            </div>
            <div className="about-cta-links">
              <Link to="/shop" className="btn btn-primary">
                Explore collection <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
