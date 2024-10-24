import React from 'react';
import './ContactArea.css';
import { assets } from '../../assets/assets';


const ContactArea = () => (
   <div className="contact-area" id="contact">
      <div className="contact" >
         <h4>GET IN TOUCH</h4>
         <div id="call" className='call'>
            <img src={assets.Email_icon} alt="" />
            <p className="email">geraldcitadel@gmail.com</p>
            <img src={assets.Call_icon} alt="" />
            <p>+2347031009615</p>
         </div>
         <div className="footer-social-icon">
            <div className="footer-icon-container">
               <a href="https://wa.me/2347031009615" target='_blank'><img src={assets.WhatsApp_Icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
               <a href="https://www.twitter.com/geraldcitadel" target='_blank'><img src={assets.X_Icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
               <a href="https://www.facebook.com/geraldcitadel" target='_blank'><img src={assets.Facebook_Icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
               <a href="https://instagram.com/geraldcitadel" target='_blank'><img src={assets.Instagram_Icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
               <a href="https://www.youtube.com/geraldcitadel" target='_blank'><img src={assets.Youtube_Icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
               <a href="http://www.linkedin.com/in/geraldcitadel" target='_blank'><img src={assets.Linkedin_Icon} alt="" /></a>
            </div>
            <div className="footer-icon-container">
               <a href="https://github.com/GeraldCitadel" target='_blank'><img src={assets.Git_Icon} alt="" /></a>
            </div>
         </div>
      </div>
      <div className="contact-form">
         <form action="mailto:geraldcitadel@gmail.com" method="post">
            <div className="form-input">
               <label htmlFor="name">NAME</label>
               <input type="text" id="name" name="name" placeholder='Your Name' required />
            </div>
            <div className="form-input">
               <label htmlFor="email">EMAIL</label>
               <input type="email" id="email" name="email" placeholder='Your Email' required />
            </div>
            <div className="form-input">
               <label htmlFor="subject">SUBJECT</label>
               <input type="text" id="subject" name="subject" placeholder='Subject' />
            </div>
            <div className="form-input">
               <label htmlFor="message">MESSAGE</label>
               <textarea id="message" name="message" placeholder='Write your message' required></textarea>
            </div>
            <div className="submit">
               <button className='button' type="submit">SEND</button>
            </div>
         </form>
      </div>
   </div>
);

export default ContactArea;
