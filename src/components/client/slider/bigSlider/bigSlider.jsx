import React, { useEffect, useState } from 'react';
import Config from "@utils/Config";
import { AxiosInstance } from "@utils/http";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BigSliderItem from "@components/client/slider/bigSlider/bigSliderItem";

const BigSlider = () => {
    const [sliders, setSlider] = useState([])

    const fetchBigSlider = () => {
        const { bigSlider } = Config.services.bigSlider

        AxiosInstance.get(bigSlider)
            .then((res) => {
                setSlider(res.data['data']);
            }).catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchBigSlider();
    }, [])
    return (
        
            
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className="h-full w-full"
                >
                    {
                        (sliders.map((slide, id) => (
                            <SwiperSlide key={id} className="p-2 h-full w-full">
                                <BigSliderItem slide={slide} />
                            </SwiperSlide>
                        )))
                    }
                </Swiper>
            



    )
};

export default BigSlider;
