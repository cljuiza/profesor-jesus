import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";
import More from "./More";
import { heros } from "./data/heros";

import { Autoplay, Pagination, Navigation, EffectCreative, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css';

import 'swiper/css/effect-flip';

const Home = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectCreative, EffectFlip]}
                grabCursor={true}
                //effect={'flip'}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-120%', 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ['120%', 0, -500],
                    },
                }}
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                navigation={true}
                speed={2500}
                className="mySwiper"
            >
                {heros.map(({ name, title, desc, img }, index) =>
                (<SwiperSlide key={index}>
                    <Hero name={name} title={title} desc={desc} img={img} />
                </SwiperSlide>))}
            </Swiper>
            <Benefits />
            <More />
            <br />

        </div >
    )
}
export default Home  