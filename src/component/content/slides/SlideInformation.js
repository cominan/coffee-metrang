import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { useSelector } from "react-redux";
import { Navigation } from "swiper";
import { valueCoffee } from "../../../store/coffeeSlice";

export default function SlideInformation() {
    const value = useSelector(valueCoffee)
    const slides = value.slides
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                {slides && slides.map((slide) => {
                    return (
                        <SwiperSlide key={slide.id}>
                            <img src={slide.url} alt='slide' />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}
