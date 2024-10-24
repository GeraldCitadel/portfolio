import React from 'react';
import './ContactIcons.css';
import { assets } from '../../assets/assets';

const ContactIcons = () => (
   <div className="contact-icons">
      <div className="contact-social-icon">
         <div className="contact-icon-container">
            <a href="https://wa.me/2347031009615" target='_blank'> <img src={assets.WhatsApp_Icon} alt="" /></a>
         </div>
         <div className="contact-icon-container">
            <a href="https://www.twitter.com/geraldcitadel" target='_blank'><img src={assets.X_Icon} alt="" /></a>
         </div>
         <div className="contact-icon-container">
            <a href="https://www.facebook.com/geraldcitadel" target='_blank'> <img src={assets.Facebook_Icon} alt="" /></a>
         </div>
         <div className="contact-icon-container">
            <a href="https://instagram.com/geraldcitadel" target='_blank'><img src={assets.Instagram_Icon} alt="" /></a>
         </div>
         <div className="contact-icon-container">
            <a href="https://www.youtube.com/geraldcitadel" target='_blank'> <img src={assets.Youtube_Icon} alt="" /></a>
         </div>
         <div className="contact-icon-container">
            <a href="http://www.linkedin.com/in/geraldcitadel" target='_blank'> <img src={assets.Linkedin_Icon} alt="" /></a>
         </div>
         <div className="contact-icon-container">
            <a href="https://github.com/GeraldCitadel" target='_blank'>  <img src={assets.Git_Icon} alt="" /></a>
         </div>
      </div>
   </div>
);

export default ContactIcons;
