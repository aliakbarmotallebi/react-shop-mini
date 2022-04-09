import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {AxiosInstance} from "@utils/http/index"
import Config from "@utils/Config";
import SliderItem from "@components/client/slider/sliderItem";

import 'swiper/css';


const Slider = ({sort, count}) => {
    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        const {slider} = Config.services.slider
        AxiosInstance.get(slider, {
                params: {
                    sort: sort,
                    count: count
                }
            }
        ).then((res) => {
            setProducts(res.data['data']);
        }).catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <Swiper
            slidesPerView={5}
        >
            {
                products.map((product) => (
                    <SwiperSlide className="text-center p-2 h-full">
                        <SliderItem product={product}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
export default Slider