import React from 'react'
import Navbar from './Navbar'
import Logo from '../assets/Logo.svg'

const Header = () => {
  return (
    <header>
        <img src={Logo} alt="Little Lemon Header Logo" />
        <Navbar />
    </header>
  )
}

export default Header