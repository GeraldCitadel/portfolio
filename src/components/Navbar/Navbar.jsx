import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import classes from './Navbar.module.css'

const Navbar = () => {

   // const navigate = useNavigate()

   const [showMenu, setShowMenu] = useState(false)
   const [menu, setMenu] = useState('Home');

   return (
      <div className={classes.main}>
         <div className={classes.header}>
            <div className={classes.logo}>
            <img src={assets.logo} alt="company logo" />
            <p>Gerald Citadel</p>
            </div>
         <ul className={classes.list}>
         <a href='#Home'><li onClick={() => { setMenu("Home") }}>Home{menu === "Home" ? <hr /> : <></>}</li></a>
               <a href="#services"><li onClick={() => { setMenu("services") }}>Services{menu === "services" ? <hr /> : <></>}</li></a>
               <a href="#portfolio"><li onClick={() => { setMenu("portfolio") }}>Portfolio{menu === "portfolio" ? <hr /> : <></>}</li></a>
              <a href="#contact"><li className={classes.track} onClick={() => { setMenu("contact") }}>Contact{menu === "contact" ? <hr /> : <></>}</li></a>
         </ul>
         <FiMenu onClick={() => setShowMenu(true)} className={classes.bar} />
         </div>
        
         <div className={classes.wrapper}>
            
            {/* ......... Mobile menu ............... */}

            {showMenu && (
                <div className={`${showMenu ? classes.mobile : classes.mobilehide}`}>
                <div className={classes['logo-wrapper']}>
                   {/* <img src={assets.logo} alt="" /> */}
                   <ImCancelCircle className={classes.hide} onClick={() => setShowMenu(false)} />
                </div>
                <ul className={classes.navlink}>
                   <a href='#home'><li onClick={() => setShowMenu(false)}>Home</li></a>
                   <a href='#services'><li onClick={() => setShowMenu(false)}>Services</li></a>
                   <a href='#portfolio'><li onClick={() => setShowMenu(false)}>Portfolio</li></a>
                   <a href='#contact'><li onClick={() => setShowMenu(false)}>Contact</li></a>
                </ul>
             </div>
            )}
           
         </div>
      </div>
   )
}

export default Navbar