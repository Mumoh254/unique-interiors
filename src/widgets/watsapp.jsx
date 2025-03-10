import React, { useState, useEffect, lazy, Suspense } from 'react';

const FaWhatsapp = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaWhatsapp })));
const IoMdClose = lazy(() => import('react-icons/io').then(module => ({ default: module.IoMdClose })));

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const phoneNumber = '254710772575';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Show after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(userMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className={`whatsapp-widget ${isOpen ? 'show' : 'hidden'}`}>
      <div className="widget-header" onClick={() => setIsOpen(!isOpen)}>
        <Suspense fallback={<div>...</div>}>
          <FaWhatsapp className="whatsapp-icon" />
        </Suspense>
        <span>Need Help?</span>
      </div>

      {isOpen && (
        <div className="widget-content">
          <div className="widget-top">
            <p className='text-white'>How can we help you today?</p>
            <Suspense fallback={<div>...</div>}>
              <IoMdClose className="close-icon text-white" onClick={() => setIsOpen(false)} />
            </Suspense>
          </div>

          <input
            className="p-2"
            type="text"
            placeholder="Type your message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button onClick={handleSendMessage} className="whatsapp-button">
            Send to WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
