import React, {useEffect, useState} from "react";

import {AxiosInstance} from "@utils/http/index"
import Config from "@utils/Config";
import SliderItem from "@components/client/slider/sliderItem";

import {A11y, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Loading from "@components/client/Commons/loading";


const Slider = ({sort, count}) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchProducts = () => {
        const {slider} = Config.services.slider
        setIsLoading(true);
        AxiosInstance.get(slider, {
                params: {
                    sort,
                    count
                }
            }
        ).then((res) => {
            setProducts(res.data['data']);
            setIsLoading(false)
        }).catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        (isLoading ? <Loading/> : (<Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={5}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                className="h-full"
            >
                {
                    products.map((product) => (
                        <SwiperSlide className="text-center p-2 h-full">
                            <SliderItem product={product}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>)


        )
    )
}
export default Slider