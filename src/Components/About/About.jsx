import React from 'react'
import { aboutImage } from '../../assets'
import { about } from '../../Constants'

import './About.scss'



const About = () => {
    return (
        <section className='app__about'>
            <div className="app__about--content">
                <div className="app__about--bio">
                    <h2>{about.head}</h2>
                    <p className='large-400'>{about.body}</p>
                    <div className="app__about-buttons">
                        <a href="/" className='btn-primary'>My Project</a>
                        <a href="/" className='btn-secondary'>
                            <span><i class="fa-solid fa-download"></i></span>
                            Download CV</a>
                    </div>
                </div>
            </div>




            <div className="app__about--image">

                <img
                    src={aboutImage}
                    alt="hero image"
                    className="app__hero--image"></img>


                <div className="app__about--brands">
                    <i class="fa-brands fa-facebook-f fa-2x"></i>
                    <i class="fa-brands fa-dribbble fa-2x" ></i>
                    <i class="fa-brands fa-instagram fa-2x"></i>
                    <i class="fa-brands fa-linkedin-in fa-2x"></i>
                    <i class="fa-brands fa-behance fa-2x"></i>
                </div>
            </div>

        </section>
    )
}

export default About



