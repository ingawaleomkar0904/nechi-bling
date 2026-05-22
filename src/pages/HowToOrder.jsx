import { motion } from 'framer-motion';
import { Search, MessageCircle, CheckCircle2, Truck } from 'lucide-react';
import WhatsAppIcon, { WHATSAPP_URL } from '../components/WhatsAppIcon';
import packagingSection from '../assets/packaging-section.png';
import './HowToOrder.css';

const orderSteps = [
  {
    num: 1,
    icon: Search,
    title: 'Choose your design',
    description:
      'Browse our collection on the website or Instagram. Screenshot the pieces you love — no cart needed.',
  },
  {
    num: 2,
    icon: MessageCircle,
    title: 'Message us on WhatsApp',
    description:
      'Send us the product name or screenshot. We confirm availability, price, and your order total right away.',
  },
  {
    num: 3,
    icon: CheckCircle2,
    title: 'Confirm your order',
    description:
      'Pay via UPI or bank transfer. We share your receipt and begin gift-wrapping your order with care.',
  },
  {
    num: 4,
    icon: Truck,
    title: 'Delivery or pickup',
    description:
      'Dispatched within 24 hours across India. Local pickup available in Pune on request.',
  },
];

const policyCards = [
  { title: 'Payment', text: 'UPI, Bank transfer, GPay' },
  { title: 'Delivery', text: 'Pan India shipping · 3–5 days' },
  { title: 'Returns', text: 'Damage on arrival reported within 24 hrs' },
];

const HowToOrder = () => {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero-inner"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="page-label">How to order</span>
            <h1 className="page-title">Ordering is as easy as a WhatsApp ping.</h1>
            <p className="page-desc">
              No carts, no logins, no confusion — just a friendly chat with us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="hto-steps-section">
        <div className="container">
          <div className="hto-steps-grid">
            {orderSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.num}
                  className="hto-step-card surface-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="hto-step-icon-wrap">
                    <div className="hto-step-icon">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="hto-step-badge">{step.num}</span>
                  </div>
                  <h3 className="body-heading">{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="hto-packaging-intro">
        <div className="container">
          <div className="section-intro">
            <span className="page-label">Lovingly packaged</span>
            <h2 className="serif">Every order, gift-wrapped with care.</h2>
            <p className="page-desc">
            Each piece arrives in a premium organza pouch with our logo sticker and a heartfelt
            thank-you card — because unboxing should feel as special as wearing it.
            </p>
          </div>
        </div>
      </section>

      {/* Packaging infographic */}
      <section className="hto-packaging-visual" aria-label="Packaging highlights and how we wrap your order">
        <div className="container">
          <img
            src={packagingSection}
            alt="Nechi Bling packaging: organza pouch, thank you card, packaging highlights, how we wrap your order, and contact details"
            className="hto-packaging-full-img"
          />
        </div>
      </section>

      <section className="hto-cta-section">
        <div className="container">
          <motion.div
            className="cta-maroon"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif">Ready to order?</h2>
            <p>
              Send us a message with the piece you love — we usually reply within an hour during
              the day.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="wa-btn wa-btn--lg">
              <WhatsAppIcon size={22} />
              Start WhatsApp chat
            </a>
          </motion.div>
        </div>
      </section>

      <section className="hto-policy-section">
        <div className="container">
          <div className="hto-policy-grid">
            {policyCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="hto-policy-card surface-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToOrder;
