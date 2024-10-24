import React from 'react';
import './Services.css';
import { servicesData } from '../../assets/assets.js';

const Services = () => (
  <div id="services" className="services-section">
    <h3 className="services">SERVICES<hr/></h3>
    <div className="service-list">
      {servicesData.map((service, index) => (
        <div key={index} className={`service ${service.icon.split(" ")[0]}`}>
          <i className={`fa ${service.icon} icon`} aria-hidden="true"></i>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
