import React from 'react';
import './Home.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="aspect" id="home">
    <div className="description">
      <img src={assets.HomeIcon} alt="profile-Picture" height="100" />
      <section className="home">
        <h1>BRAND <br /> STRATEGIST</h1>
        <p className="add1">& WEB DEVELOPER</p>
        {/* <p className="add2">HALF A DECADE EXPERIENCE</p> */}
        <Link to={'/resume'}><button className='button' >Curriculum Vitae</button> </Link>
      </section>
    </div>
  </div>
);

export default Home;
