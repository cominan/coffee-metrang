import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { useSelector } from "react-redux";
import { Autoplay, Navigation } from "swiper";
import { valueCoffee } from "../../../store/coffeeSlice";

export default function SlidePartner() {
    const value = useSelector(valueCoffee)
    const slides = value.icon
    return (
        <>
            <Swiper
                breakpoints={{
                    350: {
                        width: 350,
                        slidesPerView: 2
                    },
                    700: {
                        width: 700,
                        slidesPerView: 5
                    }
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="mySwiper">
                {slides && slides.map((slide) => {
                    return (
                        <SwiperSlide key={slide.id} className='m-auto'>
                            <img className="h-[100px] w-[180px] m-auto" src={slide.url} alt='slide' />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}
