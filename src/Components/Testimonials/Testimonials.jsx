import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";


// import required modules
import { Pagination } from "swiper";

import './Testimonials.scss'


export const Testimonials = () => {
    return (

        <section className='app__testimonials'>
            <div className="app__testimonials-heading">
                <h1>Testimonial</h1>
                <p className="large-400">There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration.</p>
            </div>
        

            <Swiper
                pagination={{
                    dynamicBullets: true,
                    slidesPerView: 1,
                }}
                modules={[Pagination]}
                className="mySwiper container"
            >
                <SwiperSlide>
                    <div className="app__testimonials-reviews">
                        <p className="large-500 reviews">
                            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                            Morbi ornare elit at libero suscipit porta.”
                        </p>

                        <h5>Esther Howard</h5>
                        <p className="regular-400">Managing Director, ABC company</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="app__testimonials-reviews">
                        <p className="large-500 reviews">
                            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                            Morbi ornare elit at libero suscipit porta.”
                        </p>

                        <h5>Esther Howard</h5>
                        <p className="regular-400">Managing Director, ABC company</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="app__testimonials-reviews">
                        <p className="large-500 reviews">
                            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                            Morbi ornare elit at libero suscipit porta.”
                        </p>

                        <h5>Esther Howard</h5>
                        <p className="regular-400">Managing Director, ABC company</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="app__testimonials-reviews">
                        <p className="large-500 reviews">
                            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                            Morbi ornare elit at libero suscipit porta.”
                        </p>

                        <h5>Esther Howard</h5>
                        <p className="regular-400">Managing Director, ABC company</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="app__testimonials-reviews">
                        <p className="large-500 reviews">
                            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                            Morbi ornare elit at libero suscipit porta.”
                        </p>

                        <h5>Esther Howard</h5>
                        <p className="regular-400">Managing Director, ABC company</p>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>


    )
}
