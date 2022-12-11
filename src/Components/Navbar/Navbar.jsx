import React from 'react'
import { logo, menu, close } from '../../assets'
import './Navbar.scss'
import { navLinks } from '../../Constants'
import { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/Hi'
import { motion } from "framer-motion"


const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      <nav className='app__navbar flex'>

          <img
            src={logo}
            alt="logo"
            className='app__navbar-logo' />


        


        <ul className='app__navbar--links flex '>
          {navLinks.map((link, index) => {
            return (
              <li key={index}><a href={`#${link}`} className="regular-500 grey-900" >{link}</a></li>
            )
          })}
        </ul>


        <div className="menu">
          <HiMenuAlt4 className='hamburger-icon' onClick={() => setToggle(true)} />


          {toggle && (
            <motion.div

            whileDrag={{x:[300,0] }}
            transition={{ duration:0.85, ease:"easeInOut"  }}

            >

              <ul className='flex app__navbars--links'>
                <HiX onClick={() => setToggle(false)} className="close-icon" />
                {navLinks.map((link, index) => {
                  return (
                    <li key={index}><a href={`#${link}`} className="regular-500 grey-900" onClick={ ()=> setToggle(false) } >{link}</a></li>
                  )
                })}
              </ul>


            </motion.div>

          )}

        </div>



      </nav>


    </>
  )
}

export default Navbar