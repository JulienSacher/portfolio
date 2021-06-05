import React from 'react';
import './Slides.css';
import FirstSlide from './FirstSlide.jsx';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-cube/effect-cube.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCube]);

function Slides() {
    return (
        <div>
            <Swiper
                effect="cube"
                className="Swiper__container" 
                direction="vertical" 
                autoHeight={true} 
                centeredSlidesBounds={true} 
                pagination={{clickable: true}} 
                longSwipes={false}
                dynamicBullets={true}
            >
                <SwiperSlide>
                    <FirstSlide />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slides
