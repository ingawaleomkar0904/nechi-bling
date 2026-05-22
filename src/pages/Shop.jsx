import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Package, Sparkles, Gift } from 'lucide-react';
import './Shop.css';
import banglesImg from '../assets/bangles.png';
import earringsImg from '../assets/earrings.png';
import giftingImg from '../assets/gifting_image_1779443416146.png';
import heroImg from '../assets/hero.png';

const WHATSAPP_URL = 'https://wa.me/917248914154';

const CATEGORIES = ['All', 'Bangles', 'Earrings', 'Neckpieces', 'Gifting'];

const CATEGORY_FROM_PARAM = {
  bangles: 'Bangles',
  earrings: 'Earrings',
  neckpieces: 'Neckpieces',
  gifting: 'Gifting',
  combos: 'Gifting',
};

const products = [
  {
    id: 1,
    name: 'Temple Jhumka Earrings',
    category: 'Earrings',
    price: '₹499',
    image: earringsImg,
    description: 'Classic temple-motif jhumkas — light, comfortable, perfect for daily wear.',
  },
  {
    id: 2,
    name: 'Pearl Drop Jhumkas',
    category: 'Earrings',
    price: '₹550',
    image: earringsImg,
    description: 'Soft pearl drops with a subtle festive shimmer.',
  },
  {
    id: 3,
    name: 'Maroon Stone Bangles',
    category: 'Bangles',
    price: '₹850',
    image: banglesImg,
    description: 'Rich maroon stones set in gold-tone — a timeless festive favourite.',
  },
  {
    id: 4,
    name: 'Gold-Plated Kada',
    category: 'Bangles',
    price: '₹650',
    image: banglesImg,
    description: 'Sleek kada pair with a polished finish for everyday elegance.',
  },
  {
    id: 5,
    name: 'Kundan Choker Set',
    category: 'Neckpieces',
    price: '₹1,200',
    image: heroImg,
    description: 'Choker with matching earrings — ideal for weddings and celebrations.',
  },
  {
    id: 6,
    name: 'Layered Necklace Set',
    category: 'Neckpieces',
    price: '₹950',
    image: heroImg,
    description: 'Delicate layered chain set that pairs beautifully with ethnic and fusion looks.',
  },
  {
    id: 7,
    name: 'Bridal Combo Set',
    category: 'Gifting',
    price: '₹2,500',
    image: giftingImg,
    description: 'Curated earrings + bangles set — gift-wrapped and ready to delight.',
  },
  {
    id: 8,
    name: 'Gift Box Special',
    category: 'Gifting',
    price: '₹1,500',
    image: giftingImg,
    description: 'A ready-to-gift box with handpicked pieces in our signature packaging.',
  },
];

const trustPoints = [
  { icon: Sparkles, text: 'Every piece handpicked by Neha & Prachi' },
  { icon: MessageCircle, text: 'Order in one tap via WhatsApp' },
  { icon: Gift, text: 'Lovingly packed for you or someone special' },
];

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramCat = searchParams.get('cat')?.toLowerCase() ?? '';
  const initialFilter = CATEGORY_FROM_PARAM[paramCat] ?? 'All';

  const [filter, setFilter] = useState(initialFilter);

  useEffect(() => {
    const mapped = CATEGORY_FROM_PARAM[paramCat];
    if (mapped) setFilter(mapped);
    else if (!paramCat) setFilter('All');
  }, [paramCat]);

  const filteredProducts = useMemo(
    () => (filter === 'All' ? products : products.filter((p) => p.category === filter)),
    [filter]
  );

  const handleFilter = (cat) => {
    setFilter(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ cat: cat.toLowerCase() });
    }
  };

  const handleOrder = (product) => {
    const message = `Hi Nechi Bling! 🌸\n\nI'd like to order:\n• ${product.name}\n• Price: ${product.price}\n• Category: ${product.category}\n\nPlease confirm availability. Thank you!`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="shop-page">
      <section className="shop-hero">
        <div className="container">
          <motion.div
            className="shop-hero-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="shop-label">Shop</span>
            <h1>Our collection</h1>
            <p className="shop-hero-desc">
              Handpicked imitation jewellery for everyday joy and festive moments. Tap
              &ldquo;Order on WhatsApp&rdquo; on any piece — we&apos;ll confirm availability and
              guide you through payment and delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="shop-trust">
        <div className="container">
          <ul className="shop-trust-list">
            {trustPoints.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon size={18} strokeWidth={1.5} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shop-catalog">
        <div className="container">
          <div className="shop-toolbar">
            <nav className="shop-filters" aria-label="Filter by category">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`shop-filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => handleFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </nav>
            <p className="shop-count">
              {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              {filter !== 'All' ? ` in ${filter}` : ''}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key={filter}
                className="shop-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {filteredProducts.map((product, index) => (
                  <motion.article
                    key={product.id}
                    className="shop-card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <div className="shop-card-image">
                      <img src={product.image} alt={product.name} loading="lazy" />
                      <span className="shop-card-category">{product.category}</span>
                    </div>
                    <div className="shop-card-body">
                      <h2 className="shop-card-title">{product.name}</h2>
                      <p className="shop-card-desc">{product.description}</p>
                      <div className="shop-card-footer">
                        <span className="shop-card-price">{product.price}</span>
                        <button
                          type="button"
                          className="shop-order-btn"
                          onClick={() => handleOrder(product)}
                        >
                          <WhatsAppIcon />
                          Order on WhatsApp
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className="shop-empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Package size={40} strokeWidth={1.25} />
                <h3 className="serif">No pieces in this category yet</h3>
                <p>New designs arrive often — browse all or message us for something specific.</p>
                <button type="button" className="btn btn-outline" onClick={() => handleFilter('All')}>
                  View all collection
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="shop-note">
            Prices are indicative. Final amount confirmed on WhatsApp. See{' '}
            <Link to="/how-to-order">how to order</Link> for payment &amp; delivery details.
          </p>
        </div>
      </section>

      <section className="shop-help">
        <div className="container">
          <motion.div
            className="shop-help-box"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif">Not sure which piece to pick?</h2>
            <p>
              Share a screenshot from Instagram or describe the occasion — we&apos;ll suggest
              something you&apos;ll love.
            </p>
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Nechi Bling! I need help choosing a piece. Can you guide me?')}`}
              target="_blank"
              rel="noreferrer"
              className="shop-help-wa"
            >
              <WhatsAppIcon size={20} />
              Chat with us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
