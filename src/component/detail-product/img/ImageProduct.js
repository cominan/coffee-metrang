import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export default function ImageProduct(props) {
    return (
        <div>
            <div className='w-[70%] m-auto border-bo mb-3 border-[1px]'>
                <img src={props.value} alt='img'
                    className='object-contain m-auto'
                />
            </div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="w-[20%] border-bl border-[1px]">
                    <SwiperSlide className=''>
                        <img src={props.value} alt='img'
                            className='object-contain m-auto'
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
