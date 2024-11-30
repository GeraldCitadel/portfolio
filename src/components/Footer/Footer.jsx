import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../context/ThemeContext';

const Footer = () => {

    const { theme } = useContext(ThemeContext)

   const d = new Date()
   const year = d.getFullYear()
   return (
      <footer className={` ${theme === 'dark' && "footer-dark"}`}>
         <h3> {theme === 'dark' && <hr />}Copyright © {year} Gerald Citadel. All Rights Reserved </h3>
      </footer>
   )
};

export default Footer;
