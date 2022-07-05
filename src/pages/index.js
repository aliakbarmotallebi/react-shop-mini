import React, { useState, useEffect } from "react";

import CustomHead from "@components/client/header/customHead";
import Slider from "@components/client/slider/slider";
import BigSlider from "@components/client/slider/bigSlider/bigSlider";
import Titles from '@utils/Titles'
import Detail from "@components/client/HomePage/detail";
import useMediaQuery from "@components/customHooks/useMediaQuery";

import 'keen-slider/keen-slider.min.css'
import MobileCategorySlider from "@components/client/slider/bigSlider/mobileCategorySlider";


const Home = () => {

    const isMobile = useMediaQuery()

    return (
        <>
            <CustomHead title={Titles.titles.home} />
            <div className="container mt-4" >
                <div className="w-full relative ">
                    <div className="md:flex  h-auto gap-3">
                        <BigSlider />
                        {!isMobile && <Detail />}

                    </div>
                </div>
            </div>
            <div className="w-full bg-[#ff5152] md:my-5 my-1 pb-2">
                <div className="container" >
                    <div className="min-h-96  w-full">
                        <Slider labelColor='text-white' label="محصولات ویژه" sort={3} count={15} />
                    </div>
                </div>
            </div>
            {isMobile && <div className="container">
                <MobileCategorySlider />
            </div>}
            <div className="container" >
                <div className="min-h-96  w-full">
                    <Slider label="پرفروش ترین" sort={2} count={15} />
                </div>
            </div>
            <div className="container" >
                <div className="min-h-96  w-full">
                    <Slider label="پربازدیدترین" sort={1} count={15} />
                </div>
            </div>
            
        </>
    )
}

export default Home
