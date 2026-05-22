import { motion } from 'framer-motion';
import { Search, MessageCircle, CheckCircle2, Truck } from 'lucide-react';
import packagingSection from '../assets/packaging-section.png';
import './HowToOrder.css';

const WHATSAPP_URL = 'https://wa.me/917248914154';

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
    <div className="how-to-order-page">
      <section className="hto-hero">
        <div className="container">
          <motion.div
            className="hto-hero-inner"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="hto-label">How to order</span>
            <h1 className="serif">Ordering is as easy as a WhatsApp ping.</h1>
            <p className="hto-hero-sub">
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
                  className="hto-step-card"
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
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="hto-packaging-intro">
        <div className="container">
          <span className="hto-label">Lovingly packaged</span>
          <h2 className="serif">Every order, gift-wrapped with care.</h2>
          <p className="hto-packaging-desc">
            Each piece arrives in a premium organza pouch with our logo sticker and a heartfelt
            thank-you card — because unboxing should feel as special as wearing it.
          </p>
        </div>
      </section>

      {/* Exact packaging design from your screenshot (single graphic) */}
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
            className="hto-cta-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif">Ready to order?</h2>
            <p>
              Send us a message with the piece you love — we usually reply within an hour during
              the day.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hto-wa-btn">
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
                className="hto-policy-card"
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
