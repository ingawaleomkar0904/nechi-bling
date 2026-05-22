import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/917248914154" 
      className="floating-wa" 
      target="_blank" 
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="tooltip">Order on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
