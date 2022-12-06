import React from 'react'
import { logo } from '../../assets'
import './Navbar.scss'
import { navLinks } from '../../Constants'



const Navbar = () => {
  return (
    <>
    <nav className='app__navbar flex'>
      <img 
      src={logo} 
      alt="logo"
      className='app__navbar-logo' />

      <ul className='flex app__navbar--links'>
        {navLinks.map((link,index) => {
          return(
            <li key={index}><a href={ `#${link}` } className="regular-500 grey-900" >{link}</a></li>
          )
        })}
      </ul>


    </nav>


    </>
  )
}

export default Navbar