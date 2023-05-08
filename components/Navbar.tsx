import React, { useContext } from 'react'
import Link from 'next/link'
import NavbarMenu from "../components/NavbarMenu"
  


const Navbar = () => {
  return (
    <section className='navbar-main-container'>
        <div className='navbar-logo'>
            <div className='navbar-logo--img'></div>
        </div>
        <div className='navbar-company-name'>
            <Link className='navbar-company-name--text' href="/">Beestattoos_</Link>
        </div>
        <NavbarMenu/> 
    </section>
    )
}

export default Navbar