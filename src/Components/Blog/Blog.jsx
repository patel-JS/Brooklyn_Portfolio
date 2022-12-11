import React, { useRef, useState } from "react";
import { blog1, blog2, blog3, blog4 } from '../../assets'
import { blogs } from '../../Constants'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";


import './Blog.scss'

const Blog = () => {
    return (
        <section className='app__blog' id='Blog'  >
            <div className="app__blog-heading">
                <h1>Blog</h1>
                <p className="large-400">There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration.</p>
            </div>

            <div className="app__blog-data">



                <Swiper pagination={true} modules={[Pagination]} slidesPerView={4} spaceBetween={24}  
                    breakpoints={{
                        380: {
                            width: 380,
                            slidesPerView: 1,
                        },

                        480: {
                            width: 480,
                            slidesPerView: 3,
                        },

                        576: {
                            width: 576,
                            slidesPerView: 3,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 4,
                        },
                        960: {
                            width: 960,
                            slidesPerView: 2,
                        }
                    }}
                className="mySwiper container"  >
                    <SwiperSlide>
                        <div className="data-card">
                            <img src={blog1} alt="work" />
                            <div className="card-content">
                                <p className="small-400 label">{blogs[0].blog1.date} / {blogs[0].blog1.comment}</p>
                                <p className="large-500 title">{blogs[0].blog1.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="data-card">
                            <img src={blog2} alt="work" />
                            <div className="card-content">
                                <p className="small-400 label">{blogs[0].blog2.date} / {blogs[0].blog2.comment}</p>
                                <p className="large-500 title">{blogs[0].blog2.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="data-card">
                            <img src={blog3} alt="work" />
                            <div className="card-content">
                                <p className="small-400 label">{blogs[0].blog3.date} / {blogs[0].blog3.comment}</p>
                                <p className="large-500 title">{blogs[0].blog3.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="data-card">
                            <img src={blog4} alt="work" />
                            <div className="card-content">
                                <p className="small-400 label">{blogs[0].blog4.date} / {blogs[0].blog4.comment}</p>
                                <p className="large-500 title">{blogs[0].blog4.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="data-card">
                            <img src={blog2} alt="work" />
                            <div className="card-content">
                                <p className="small-400 label">{blogs[0].blog2.date} / {blogs[0].blog2.comment}</p>
                                <p className="large-500 title">{blogs[0].blog2.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="data-card">
                            <img src={blog1} alt="work" />
                            <div className="card-content">
                                <p className="small-400 label">{blogs[0].blog1.date} / {blogs[0].blog1.comment}</p>
                                <p className="large-500 title">{blogs[0].blog1.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="data-card">
                            <img src={blog4} alt="work" />
                            <div className="card-content">
                                <p className="small-400 label">{blogs[0].blog4.date} / {blogs[0].blog4.comment}</p>
                                <p className="large-500 title">{blogs[0].blog4.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


        </section>
    )
}

export default Blog