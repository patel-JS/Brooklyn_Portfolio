import React from 'react'
import './CTA.scss'

const CTA = () => {
    return (
        <>
            <section className="app__cta">
                <div className="app__cta-content">
                    <h1>Do you have Project Idea? Let's discuss your project!</h1>
                    <p className="large-400">There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.</p>
                    <a href="#" className="btn-primary">Let’s work Together <span><i class="fa-solid fa-arrow-right"></i></span> </a>
                </div>
            </section>
        </>
    )
}

export default CTA