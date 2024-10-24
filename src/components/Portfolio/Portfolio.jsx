import React from 'react'
import './Portfolio.css'

import { portfolioData } from '../../assets/assets';


const Portfolio = () => {

   return (
      <div id="portfolio" className="portfolio-section">
         <h3 className="portfolios">PORTFOLIO<hr /></h3>
         <div className="portfolio-list">
            {portfolioData.map((Portfolio, index) => (
               <div key={index} className="portfolio">
                  <img src={Portfolio.image} alt="" />
                  <h2>{Portfolio.title}</h2>
                  <p>{Portfolio.description}</p>
                  <div>
                     <button className='button'>GitHub</button>
                     <button className='button'>Demo</button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Portfolio