import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Package, Sparkles, Gift, Heart } from 'lucide-react';
import WhatsAppIcon, { WHATSAPP_URL } from '../components/WhatsAppIcon';
import './Shop.css';
import banglesImg from '../assets/bangles.png';
import earringsImg from '../assets/earrings.png';
import giftingImg from '../assets/gifting_image_1779443416146.png';
import heroImg from '../assets/hero.png';

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

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramCat = searchParams.get('cat')?.toLowerCase() ?? '';
  const initialFilter = CATEGORY_FROM_PARAM[paramCat] ?? 'All';

  const [filter, setFilter] = useState(initialFilter);
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

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
    <div className="page-shell">
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero-inner page-hero-inner--wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="page-label">Shop</span>
            <h1 className="page-title">Our collection</h1>
            <p className="page-desc">
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
                  className={`filter-pill ${filter === cat ? 'active' : ''}`}
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
                    className="shop-card surface-card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <div className="shop-card-image">
                      <button className={`wishlist-btn ${wishlist.includes(product.id) ? 'active bounce' : ''}`} onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }} aria-label="Add to wishlist">
                        <Heart size={18} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                      </button>
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
                          className="wa-btn wa-btn--block"
                          onClick={() => handleOrder(product)}
                        >
                          <WhatsAppIcon size={18} />
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
            <Link to="/how-to-order" className="text-link">how to order</Link> for payment &amp; delivery details.
          </p>
        </div>
      </section>

      <section className="shop-help">
        <div className="container">
          <motion.div
            className="cta-maroon"
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
              className="wa-btn wa-btn--lg"
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
