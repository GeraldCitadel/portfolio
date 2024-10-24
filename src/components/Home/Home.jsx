import React from 'react';
import './Home.css';
import HomeIcon from '../../Assets/Gerald.jpg'

const Home = () => (
  <div className="aspect" id="home">
    <div className="description">
      <img src={HomeIcon} alt="profile-Picture" height="100" />
      <section className="home">
        <h1>BRAND <br /> STRATEGIST</h1>
        <p className="add1">& WEB DEVELOPER</p>
        {/* <p className="add2">HALF A DECADE EXPERIENCE</p> */}
        <button className='button'>Curriculum Vitae</button> 
      </section>
    </div>
  </div>
);

export default Home;
