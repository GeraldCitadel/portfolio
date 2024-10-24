import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './ScrollButton.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {visible && (
        <div onClick={scrollToTop}>
         <img src={assets.ScrollIcon} alt="" />
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
