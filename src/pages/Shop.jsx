import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Package, Sparkles, Gift, Heart, X } from 'lucide-react';
import WhatsAppIcon, { WHATSAPP_URL } from '../components/WhatsAppIcon';
import './Shop.css';

// Premium Generated Assets
import kundanChokerImg from '../assets/kundan_choker.png';
import giftBoxPremiumImg from '../assets/gift_box_premium.png';
import mppvBanglesImg from '../assets/mppv_bangles.jpg';
import qvpBanglesImg from '../assets/qvp_bangles.jpg';
import mpvBanglesImg from '../assets/mpv_bangles.jpg';
import qspBanglesImg from '../assets/qsp_bangles.jpg';
import erSvSt01Img from '../assets/er_sv_st01.jpg';
import erSvFl02Img from '../assets/er_sv_fl02.jpg';
import erSvFl04Img from '../assets/er_sv_fl04.jpg';
import erGdFl05Img from '../assets/er_gd_fl05.jpg';
import erGdCr01Img from '../assets/er_gd_cr01.jpg';
import erGdWv01Img from '../assets/er_gd_wv01.jpg';
import erGdFl01Img from '../assets/er_gd_fl01.jpg';
import erGdFl06Img from '../assets/er_gd_fl06.jpg';
import erSvSp01Img from '../assets/er_sv_sp01.jpg';
import erGdRub01Img from '../assets/er_gd_rub_01.jpg';

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
    id: 11,
    name: 'ER-SV-ST01 Crystal Halo Studs',
    category: 'Earrings',
    price: '₹129',
    image: erSvSt01Img,
    description: 'Charming circle studs in silver, embellished with a sparkling border of round cubic zirconia stones for minimalist elegance.',
  },
  {
    id: 12,
    name: 'ER-SV-FL02 Marquise Flower Drops',
    category: 'Earrings',
    price: '₹119',
    image: erSvFl02Img,
    description: 'Stunning drop earrings in silver featuring cascading marquise-cut floral clusters that catch the light beautifully.',
  },
  {
    id: 13,
    name: 'ER-SV-FL04 Cascading Star Flowers',
    category: 'Earrings',
    price: '₹80',
    image: erSvFl04Img,
    description: 'Delicate silver drop earrings showing three dangling star-flowers set with glittering micro-zirconia stones.',
  },
  {
    id: 14,
    name: 'ER-GD-FL05 Golden Marquise Studs',
    category: 'Earrings',
    price: '₹50',
    image: erGdFl05Img,
    description: 'Beautiful gold-plated flower stud earrings featuring five petals of clear marquise-cut zirconia stones surrounding a gold core.',
  },
  {
    id: 15,
    name: 'ER-GD-CR01 Golden Double-Row Hoops',
    category: 'Earrings',
    price: '₹50',
    image: erGdCr01Img,
    description: 'Classic gold-plated half-hoop earrings featuring two clean rows of embedded round micro-diamonds for daily sparkle.',
  },
  {
    id: 16,
    name: 'ER-GD-WV01 Leafy Wave Drops',
    category: 'Earrings',
    price: '₹70',
    image: erGdWv01Img,
    description: 'Elegant rose gold-toned earrings featuring a wavy open-work leaf design topped with a delicate diamond floral cluster.',
  },
  {
    id: 17,
    name: 'ER-GD-FL01 Pearl Cluster Studs',
    category: 'Earrings',
    price: '₹80',
    image: erGdFl01Img,
    description: 'A majestic pair of gold-plated stud earrings showing a premium pearl cluster surrounding a deep ruby-red center stone.',
  },
  {
    id: 18,
    name: 'ER-GD-FL06 Silver Starburst Studs',
    category: 'Earrings',
    price: '₹70',
    image: erGdFl06Img,
    description: 'Glistening silver circular studs decorated with a starburst core of round diamonds and a matching outer halo.',
  },
  {
    id: 19,
    name: 'ER-SV-SP01 Silver Spiral Swirls',
    category: 'Earrings',
    price: '₹69',
    image: erSvSp01Img,
    description: 'Fascinating silver-plated studs crafted in a delicate spiral swirl pattern and paved with brilliant round cubic zirconia.',
  },
  {
    id: 20,
    name: 'ER-GD-RUB-01 Golden Ruby Jhumkas',
    category: 'Earrings',
    price: '₹70',
    image: erGdRub01Img,
    description: 'Heritage gold-plated jhumka drop earrings featuring a detailed dome-like design, ruby-red center, and dangling golden beads.',
  },
  {
    id: 3,
    name: 'MPPV Gold Bangles',
    category: 'Bangles',
    price: '₹249',
    image: mppvBanglesImg,
    description: 'An exquisite set of four textured gold-plated bangles, designed with traditional detailing to complement any festive attire.',
  },
  {
    id: 4,
    name: 'QVP Gold-Plated Kadas',
    category: 'Bangles',
    price: '₹149',
    image: qvpBanglesImg,
    description: 'A beautifully crafted pair of open-work gold-toned kadas featuring delicate filigree patterns and a premium polished finish.',
  },
  {
    id: 9,
    name: 'MPV Silver Diamond Bangles',
    category: 'Bangles',
    price: '₹299',
    image: mpvBanglesImg,
    description: 'A stunning pair of silver-plated bangles embellished with shimmering square cubic zirconia diamonds for modern elegance.',
  },
  {
    id: 10,
    name: 'QSP Gold-Plated Bangles',
    category: 'Bangles',
    price: '₹199',
    image: qspBanglesImg,
    description: 'A set of four delicate gold-plated bangles featuring a beautifully textured micro-beaded pattern that adds a subtle sparkle to your wrists.',
  },
  {
    id: 5,
    name: 'Kundan Choker Set',
    category: 'Neckpieces',
    price: '₹1,200',
    image: kundanChokerImg,
    description: 'Stunning choker necklace decorated with premium Kundan stones and matching earrings — ideal for ethnic celebrations.',
  },
  {
    id: 6,
    name: 'Royal Choker Set',
    category: 'Neckpieces',
    price: '₹1,350',
    image: kundanChokerImg,
    description: 'A majestic Kundan neckpiece featuring intricate pearl drops and emerald accents.',
  },
  {
    id: 7,
    name: 'Bridal Combo Gift Box',
    category: 'Gifting',
    price: '₹2,500',
    image: giftBoxPremiumImg,
    description: 'A curated gift box containing a matching pair of earrings and select Kada bangles, beautifully packaged.',
  },
  {
    id: 8,
    name: 'Signature Gift Box Special',
    category: 'Gifting',
    price: '₹1,500',
    image: giftBoxPremiumImg,
    description: 'Our signature Nechi Bling cream box lined with rich red velvet, containing handpicked luxury pieces.',
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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  useEffect(() => {
    const mapped = CATEGORY_FROM_PARAM[paramCat];
    if (mapped) setFilter(mapped);
    else if (!paramCat) setFilter('All');
  }, [paramCat]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

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
            <h1 className="page-title">Our collection</h1>
            <p className="page-desc">
              Explore our boutique collection of handpicked premium jewellery. Tap any image to zoom and read details, or order in one click via WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="shop-trust">
        <div className="container">
          <ul className="shop-trust-list">
            {trustPoints.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon size={20} strokeWidth={1.5} />
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
                    <div 
                      className="shop-card-image" 
                      onClick={() => setSelectedProduct(product)}
                      style={{ cursor: 'zoom-in' }}
                    >
                      <button 
                        className={`wishlist-btn ${wishlist.includes(product.id) ? 'active bounce' : ''}`} 
                        onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }} 
                        aria-label="Add to wishlist"
                      >
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
                          Order
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

      {/* Modal Lightbox Zoom Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close popup"
              >
                <X size={20} />
              </button>
              
              <div className="modal-content">
                <div className="modal-image-wrapper">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
                </div>
                <div className="modal-info">
                  <span className="modal-category">{selectedProduct.category}</span>
                  <h2 className="modal-title serif">{selectedProduct.name}</h2>
                  <p className="modal-desc">{selectedProduct.description}</p>
                  
                  <div className="modal-footer-section">
                    <div className="modal-price-row">
                      <span className="modal-label-text">Indicative Price</span>
                      <span className="modal-price">{selectedProduct.price}</span>
                    </div>
                    <button
                      type="button"
                      className="wa-btn wa-btn--lg wa-btn--block"
                      onClick={() => {
                        handleOrder(selectedProduct);
                        setSelectedProduct(null);
                      }}
                    >
                      <WhatsAppIcon size={20} />
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
