import React, { useContext } from 'react';
import './Services.css';
import { servicesData } from '../../assets/assets.js';
import { ThemeContext } from '../../context/ThemeContext.jsx';

const Services = () => {

const { theme } = useContext(ThemeContext)

return (
  <div id="services" className="services-section">
    <h3 className="services">SERVICES<hr/></h3>
    <div className="service-list">
      {servicesData.map((service, index) => (
        <div key={index} className={`service ${service.icon.split(" ")[0]} ${theme === "dark" && 'dark'}`} >
          <i className={`fa ${service.icon} icon`} aria-hidden="true"></i>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
)
};

export default Services;
