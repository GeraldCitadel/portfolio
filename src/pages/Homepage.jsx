import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import ContactIcons from '../components/ContactIcons/ContactIcons'
import Clients from '../components/Clients/Clients'
import Services from '../components/Services/Services'
import Portfolio from '../components/Portfolio/Portfolio'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import ContactArea from '../components/ContactArea/ContactArea'
import Footer from '../components/Footer/Footer'
import Stack from '../components/Stack/Stack'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Home />
    <ContactIcons />
    <Portfolio />
    {/* <Clients /> */}
    <Services />
    <Stack />
    <ContactArea />
    <ScrollButton />
    <Footer />
    </>
  )
}

export default Homepage