import React from 'react'
import './Navbar.css';
import Navhead from './navhead/Navhead';
import Navlink from './navlink/Navlink';

const Navbar = () => {
   
  return (
    <section id = 'navbar'>
        <Navhead/>
        <Navlink/>
    </section>
  )
}

export default Navbar