import WhatsAppIcon, { WHATSAPP_URL } from './WhatsAppIcon';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      className="floating-wa"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={30} />
      <span className="tooltip">Order on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
