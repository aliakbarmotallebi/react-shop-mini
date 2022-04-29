import React, { useEffect, useState } from "react";

import { AxiosInstance } from "@utils/http/index"
import Config from "@utils/Config";
import SliderItem from "@components/client/slider/sliderItem";

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Loading from "@components/client/Commons/loading";


const Slider = ({ label, sort, count }) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchProducts = () => {
        const { slider } = Config.services.slider
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
        (isLoading ? <Loading /> : (
            <section className="pt-3">
                <header className="flex items-center">
                    <h2 className="font-semibold text-xl pt-5 py-2 mb-3">
                        {label}
                    </h2>
                    <div className="mr-auto">
                        <a href="#"
                            className="border border-[#dfdfdf] rounded text-xs py-1 px-3 tracking-tight hover:bg-gray-300 text-black hover:text-gary-700">
                            مشاهده همه
                        </a>
                    </div>
                </header>

                <Swiper
                    spaceBetween={10}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    slidesPerView={5}
                    scrollbar={{ draggable: true }}
                    className="h-full"
                >
                    {
                        products.map((product, id) => (
                            <SwiperSlide key={id}>
                                <SliderItem product={product} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </section>
        )
        )
    )
}
export default Slider
