import React, { useContext } from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'

import { portfolioData } from '../../assets/assets';
import { ThemeContext } from '../../context/ThemeContext';


const Portfolio = () => {

    const { theme } = useContext(ThemeContext)

   return (
      <div id="portfolio" className='portfolio-section'>
         <h3 className="portfolios">PORTFOLIO<hr /></h3>
         <div className="portfolio-list">
            {portfolioData.map((Portfolio, index) => (
               <div key={index} className={` portfolio ${theme === "dark" && "dark"}`}>
                  <img src={Portfolio.image} alt="" />
                  <h2>{Portfolio.title}</h2>
                  <p>{Portfolio.description}</p>
                  <div className='actions'>
                     <a href={Portfolio.url} className='button' target='_blank'>Demo</a>
                     <a href={Portfolio.demo} className='button' target='_blank'>GitHub</a>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Portfolio