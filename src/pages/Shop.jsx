import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Filter } from 'lucide-react';
import './Shop.css';
import banglesImg from '../assets/bangles.png';
import earringsImg from '../assets/earrings.png';

const Shop = () => {
  const [filter, setFilter] = useState('All');

  const products = [
    { id: 1, name: 'Temple Jhumka Earrings', category: 'Earrings', price: '₹499', image: earringsImg },
    { id: 2, name: 'Maroon Stone Bangles', category: 'Bangles', price: '₹850', image: banglesImg },
    { id: 3, name: 'Kundan Choker Set', category: 'Neckpieces', price: '₹1200', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80' },
    { id: 4, name: 'Oxidized Silver Earrings', category: 'Earrings', price: '₹350', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80' },
    { id: 5, name: 'Bridal Combo Set', category: 'Combos', price: '₹2500', image: 'https://images.unsplash.com/photo-1512633017083-67231aba710d?auto=format&fit=crop&q=80' },
    { id: 6, name: 'Pearl Drop Jhumkas', category: 'Earrings', price: '₹550', image: 'https://images.unsplash.com/photo-1544648151-536ae9db6898?auto=format&fit=crop&q=80' },
    { id: 7, name: 'Gold-Plated Kada', category: 'Bangles', price: '₹650', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80' },
    { id: 8, name: 'Gift Box Special', category: 'Combos', price: '₹1500', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80' },
  ];

  const categories = ['All', 'Bangles', 'Earrings', 'Neckpieces', 'Combos'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  const handleOrder = (product) => {
    const message = `Hi Nechi Bling! I'm interested in ordering: ${product.name} (${product.price}). Is it available?`;
    window.open(`https://wa.me/911234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="shop-page">
      <section className="shop-header">
        <div className="container">
          <h1 className="serif">Our Collection</h1>
          <p>Hand-picked elegance for your unique style</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="filters">
            <div className="filter-label">
              <Filter size={18} />
              <span>Filter by:</span>
            </div>
            <div className="filter-options">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((p, index) => (
              <motion.div 
                key={p.id} 
                className="product-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="product-image">
                  <img src={p.image} alt={p.name} />
                  <div className="product-badge">{p.category}</div>
                </div>
                <div className="product-info">
                  <h3 className="serif">{p.name}</h3>
                  <p className="price">{p.price}</p>
                  <button className="btn btn-primary order-btn" onClick={() => handleOrder(p)}>
                    <MessageCircle size={16} />
                    Order on WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
