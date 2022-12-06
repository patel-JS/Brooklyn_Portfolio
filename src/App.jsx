import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Works from './Components/Works/Works'
import Portfolio from './Components/Portfolio/Portfolio'
import CTA from './Components/CTA/CTA'
import Blog from './Components/Blog/Blog'
import Profession from './Components/Profession/Profession'
import Brands from './Components/Brands/Brands'
import { Testimonials } from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Form from './Components/Form/Form'


function App() {

  return (
    <>
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Portfolio />
    </div>
      <CTA />
      <div className="container">
        <Blog />
        <Profession />
        <Brands />
        <Testimonials />
        <Form />
      </div>
        <Footer />
    </>
  )
}

export default App
