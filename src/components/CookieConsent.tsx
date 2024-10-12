import React, { useState, useEffect } from 'react';
import { getCookie, setCookie } from '../utils/cookieUtils';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const cookieConsent = getCookie('cookieConsent');
    if (cookieConsent === null) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie('cookieConsent', 'accepted', 365);
    setShowConsent(false);
  };

  const handleDecline = () => {
    setCookie('cookieConsent', 'declined', 365);
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;