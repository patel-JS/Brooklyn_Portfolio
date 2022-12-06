import React from 'react'
import { logoLight } from '../../assets'
import { navLinks } from '../../Constants'
// import Footer from '../Footer/Footer'
import './Form.scss'

const Form = () => {
    return (
        <>
            <section className="app__form">
                <div className="app__cotact-data">
                    <div className="contact-heading">
                        <h2>Let’s discuss your Project</h2>
                        <p className="large-400">There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
                    </div>

                    <div className="contact-cards">
                        <div className="card-data">
                            <i class="fa-solid fa-location-dot fa-2x"></i>
                            <div className="data">
                                <p className="small-400">Address:</p>
                                <p className="regular-500">New Mexico 31134</p>
                            </div>
                        </div>

                        <div className="card-data">
                            <i class="fa-solid fa-envelope fa-2x"></i>
                            <div className="data">
                                <p className="small-400">My Email:</p>
                                <p className="regular-500">brooklyn@icloud.com</p>
                            </div>
                        </div>

                        <div className="card-data">
                            <i class="fa-solid fa-phone fa-2x"></i>
                            <div className="data">
                                <p className="small-400">Contact Me:</p>
                                <p className="regular-500">00-1234 00000</p>
                            </div>
                        </div>

                        <div className="card-icons">
                            <i class="fa-brands fa-facebook-f fa-2x"></i>
                            <i class="fa-brands fa-dribbble fa-2x" ></i>
                            <i class="fa-brands fa-instagram fa-2x"></i>
                            <i class="fa-brands fa-linkedin-in fa-2x"></i>
                            <i class="fa-brands fa-behance fa-2x"></i>
                        </div>

                    </div>

                </div>

                <div className="app__cotact-form">
                    <p className="large-400">There are many variations of passages of Lorem Ipsu available,
                        but the majority have suffered alte.</p>

                    <form action="https://formspree.io/f/mrgdlgll" method="post" name='myForm'>

                        <input type="text" name="name" id="name" placeholder='Name*' required />
                        <input type="email" name="email" id="email" placeholder='Email*' required />
                        <input type="text" name="location" id="location" placeholder='Location*' required />
                        <input type="number" name="budget" id="budget" placeholder='Budget*' required />
                        <input type="text" name="subject" id="subject" placeholder='Subject*' required />
                        <input type="text" name="message" id="message" placeholder='Message*' required />
                        <div className="btn">
                            <input type="submit" value="Send" className='btn-primary btn' />


                        </div>
                    </form>

                </div>

            </section>
        </>

    )
}

export default Form