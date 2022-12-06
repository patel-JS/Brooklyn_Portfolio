import React from 'react'
import { logoLight } from '../../assets'
import { navLinks } from '../../Constants'

import './Footer.scss'


const Footer = () => {
    return (
        <footer className='app__footer'>
            <div className="app__container container">

                <img src={logoLight} alt="logo" />

                <ul>
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={`#${link}`} className="regular-400 grey-50">{link}</a>
                            </li>
                        )
                    })}
                </ul>

                <p className="regular-400 grey-white">Copyright © 2022 Picto.</p>

            </div>
        </footer>
    )
}

export default Footer