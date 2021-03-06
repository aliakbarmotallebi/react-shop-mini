import React, { useEffect, useState } from "react";

import { AxiosInstance } from "@utils/http/index"
import Config from "@utils/Config";
import SliderItem from "@components/client/slider/sliderItem";
import Loading from "@components/client/Commons/loading";

import { useKeenSlider } from 'keen-slider/react'

const Slider = ({ label, sort, count, category, labelColor }) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchProducts = () => {
        const { smallSlider } = Config.services.slider
        const { sliderCategory } = Config.services.sliderCategory

        const sliderUrl = category ? `${sliderCategory}${category}` : smallSlider
        const params = sort ? { sort, count } : { category, count }
        setIsLoading(true);

        AxiosInstance.get(sliderUrl, {
            params
        }
        ).then((res) => {
            setProducts(res.data['data']);
            setIsLoading(false)
        }).catch((err) => console.log(err));
    }

    const [refCallback] = useKeenSlider(
        {
            mode: "free-snap",
            rtl: true,
            breakpoints: {

                "(min-width: 481px)": {
                    slides: { perView: 3, spacing: 5 },
                },
                "(min-width: 769px)": {
                    slides: { perView: 5.5, spacing: 8 },
                }
            },
            slides: {
                perView: 2.3,
                spacing: 4
            }
        })

    useEffect(() => {
        fetchProducts();
    }, [])


    return (

        (isLoading ? <div className="w-full h-96"><Loading /></div> : (
            <section className="pt-2 h-full ">
                <header className="flex items-center">
                    <h2 className={`font-yekan-bold md:text-xl text-lg py-1  md:mb-3 mb-0 ${labelColor ? labelColor : ''} `}>
                        {label}
                    </h2>
                </header>
                <div ref={refCallback} className="keen-slider">
                    {
                        products.map((product, id) => (
                            <div className="keen-slider__slide" key={id}>
                                <SliderItem product={product} />
                            </div>

                        ))
                    }
                </div>

            </section >
        )
        )
    )
}
export default Slider