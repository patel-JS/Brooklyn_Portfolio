import React from 'react'

import { work1, work2, work3, work4, work5, work6 } from '../../assets'
import { portfolio } from '../../Constants'
import './Portfolio.scss'


const Portfolio = () => {
    return (
        <>
            <section className='app__portfolio'>
                <div className="app__portfolio-heading">
                    <h1>Portfolio</h1>
                    <p className="large-400">There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.</p>
                </div>

                <div className="app__portfolio-data">

                    <div className="data-card">
                        <img src={work1} alt="work" />
                        <div className="card-content">
                            <p className="thin-500 label">{portfolio[0].data1.label}</p>
                            <p className="large-600 title">{portfolio[0].data1.title}</p>
                            <p className="small-400 text">{portfolio[0].data1.text}</p>
                            <a href="/" className='btn-secondary'>Case Study</a>
                        </div>
                    </div>

                    <div className="data-card">
                        <img src={work2} alt="work" />
                        <div className="card-content">
                            <p className="thin-500 label">{portfolio[0].data2.label}</p>
                            <p className="large-600 title">{portfolio[0].data2.title}</p>
                            <p className="small-400 text">{portfolio[0].data2.text}</p>
                            <a href="/" className='btn-secondary'>Case Study</a>
                        </div>
                    </div>

                    <div className="data-card">
                        <img src={work3} alt="work" />
                        <div className="card-content">
                            <p className="thin-500 label">{portfolio[0].data3.label}</p>
                            <p className="large-600 title">{portfolio[0].data3.title}</p>
                            <p className="small-400 text">{portfolio[0].data3.text}</p>
                            <a href="/" className='btn-secondary'>Case Study</a>
                        </div>
                    </div>

                    <div className="data-card">
                        <img src={work4} alt="work" />
                        <div className="card-content">
                            <p className="thin-500 label">{portfolio[0].data4.label}</p>
                            <p className="large-600 title">{portfolio[0].data4.title}</p>
                            <p className="small-400 text">{portfolio[0].data4.text}</p>
                            <a href="/" className='btn-secondary'>Case Study</a>
                        </div>
                    </div>

                    <div className="data-card">
                        <img src={work5} alt="work" />
                        <div className="card-content">
                            <p className="thin-500 label">{portfolio[0].data5.label}</p>
                            <p className="large-600 title">{portfolio[0].data5.title}</p>
                            <p className="small-400 text">{portfolio[0].data5.text}</p>
                            <a href="/" className='btn-secondary'>Case Study</a>
                        </div>
                    </div>

                    <div className="data-card">
                        <img src={work6} alt="work" />
                        <div className="card-content">
                            <p className="thin-500 label">{portfolio[0].data6.label}</p>
                            <p className="large-600 title">{portfolio[0].data6.title}</p>
                            <p className="small-400 text">{portfolio[0].data6.text}</p>
                            <a href="/" className='btn-secondary'>Case Study</a>
                        </div>
                    </div>
                </div>

                <a href="/" className='btn-primary'>More Project</a>
            </section>


        </>

    )
}

export default Portfolio