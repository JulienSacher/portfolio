import React from 'react';
import './Slides.css';
import FirstSlide from './FirstSlide.jsx';
import SecondSlide from './SecondSlide.jsx';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Slides() {
    return (   
        <div>
            <Swiper
                className="Swiper__container" 
                direction="vertical" 
                
                centeredSlidesBounds={true} 
                pagination={{clickable: true}} 
                longSwipes={false}
                dynamicBullets={true}
            >
                <SwiperSlide>
                    <FirstSlide />
                </SwiperSlide>
                <SwiperSlide>
                    <SecondSlide />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slides
