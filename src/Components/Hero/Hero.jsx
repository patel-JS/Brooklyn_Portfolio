import React from 'react'
import './Hero.scss'
import { heroText, achievement } from '../../Constants'
import { heroImage } from '../../assets'


const Hero = () => {
    return (
        <>
            <section className='app__hero'>
                <div className="app__hero--content">
                    <div className="app__hero--bio">
                        <p className='large-400'>{heroText}</p>
                        <a href="#" className='btn-primary'>Say Hello</a>
                    </div>
                    <div className="app__hero--table">
                        <div className="app__table--data">
                            <h3>15 Y</h3>
                            <p className="regular-400">Experience</p>
                        </div>
                        <div className="app__table--data">
                            <h3>250+</h3>
                            <p className="regular-400">Project Completed</p>
                        </div>
                        <div className="app__table--data">
                            <h3>58</h3>
                            <p className="regular-400">Happy Clients</p>
                        </div>
                    </div>
                </div>

                <img 
                src={heroImage} 
                alt="hero image"
                className="app__hero--image"></img>
            
            </section>
        </>
    )
}

export default Hero