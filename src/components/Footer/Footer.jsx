import React from 'react';
import './Footer.css';

const Footer = () => {

   const d = new Date()
   const year = d.getFullYear()
   return (
      <footer>
         <h3>Copyright © {year} Gerald Citadel. All Rights Reserved</h3>
      </footer>
   )
};

export default Footer;
