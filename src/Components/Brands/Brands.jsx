import React from 'react'
import { amazon, dribble, google, linkedin, medium, spotify } from '../../assets'
import './Brands.scss'


const Brands = () => {
  return (
      <section className='app__brands'>
          <div className="app__brands-heading">
              <h1>Happy Clients</h1>
              <p className="large-400">There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration.</p>
          </div>

          <div className="app__brands-logo">
              <img src={google} alt="google" />
              <img src={dribble} alt="google" />
              <img src={linkedin} alt="google" />
              <img src={amazon} alt="google" />
              <img src={medium} alt="google" />
              <img src={spotify} alt="google" />
          </div>
      </section>
  )
}

export default Brands