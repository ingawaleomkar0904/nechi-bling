import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import HowToOrder from './pages/HowToOrder';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-order" element={<HowToOrder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
      <footer className="footer" style={{textAlign: 'center', padding: '60px 0', backgroundColor: '#FCF8F1', borderTop: '1px solid rgba(212, 175, 55, 0.2)'}}>
        <div className="container">
          <h2 className="serif" style={{color: '#5D0E07', marginBottom: '10px'}}>Nechi Bling</h2>
          <p style={{color: '#666', fontSize: '0.9rem'}}>&copy; 2024 Nechi Bling. All rights reserved.</p>
          <p style={{color: '#D4AF37', fontSize: '0.8rem', marginTop: '10px', letterSpacing: '2px', textTransform: 'uppercase'}}>Wear the Joy</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
