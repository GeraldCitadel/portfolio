import React, { useState } from 'react';
import './Clients.css';
import { clientsData } from '../../assets/assets.js';
import { assets } from '../../assets/assets.js';


const Clients = () => {
   const [index, setIndex] = useState(1);

   const handleNext = () => {
      if (index < clientsData.length - 4) {
         setIndex(index + 1);
      }
   };

   const handlePrev = () => {
      if (index > 0) {
         setIndex(index - 1);
      }
   };

   return (
      <>
         <div className="header-title">
            <h2>CLIENTS <hr /></h2>
         </div>
         <div id='porfolio' className='clients'>
            <div className="gallery">
               <img id='prev' src={assets.Prev_icon} onClick={handlePrev} alt='' disabled={index === 0} />
               <img id='next' src={assets.Next_icon} onClick={handleNext} alt='' disabled={index >= clientsData.length - 4} />
            </div>
            <div className="client">
               {clientsData.slice(index, index + 4).map((client) => (
                  <article key={client.id} className='client-data'>
                     <img src={client.src} alt="" />
                     <h1>{client.name}</h1>
                  </article>
               ))}
            </div>
         </div>
      </>

   );
};

export default Clients;
