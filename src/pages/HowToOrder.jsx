import { motion } from 'framer-motion';
import { Search, MessageSquare, CheckCircle, Truck, ArrowRight } from 'lucide-react';
import './HowToOrder.css';

const HowToOrder = () => {
  const steps = [
    {
      icon: <Search size={32} />,
      title: 'Choose Design',
      description: 'Explore our latest collection and pick your favorite pieces. Screenshot the ones you love!'
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Message on WhatsApp',
      description: 'Send us the screenshots on WhatsApp. We will confirm the price and availability immediately.'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Confirm Order',
      description: 'Share your shipping details and complete the payment via GPay, PhonePe, or Bank Transfer.'
    },
    {
      icon: <Truck size={32} />,
      title: 'Home Delivery',
      description: 'Sit back and relax! Your Joy will be carefully packed and delivered to your doorstep.'
    }
  ];

  return (
    <div className="how-to-order">
      <section className="how-header">
        <div className="container">
          <h1 className="serif">How to Order</h1>
          <div className="gold-divider"></div>
          <p>Ordering with us is simple, personal, and secure.</p>
        </div>
      </section>

      <section className="steps-section">
        <div className="container">
          <div className="steps-grid">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                className="step-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-content">
                  <h3 className="serif">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="step-arrow"><ArrowRight /></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapping-section">
        <div className="container">
          <div className="wrapping-box">
            <h2 className="serif">How We Wrap Your Order</h2>
            <p>Every piece is packed with love and care, ensuring it reaches you in perfect condition.</p>
            <div className="wrapping-features">
              <div className="feature">✨ Premium Organza Pouch</div>
              <div className="feature">🏷️ Branded Logo Sticker</div>
              <div className="feature">💝 Secure Packaging</div>
              <div className="feature">🎁 Perfect for Gifting</div>
            </div>
            <a href="https://wa.me/911234567890" className="btn btn-primary">Start Your Order Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToOrder;
