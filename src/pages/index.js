import React, { useState, useEffect } from "react";

import CustomHead from "@components/client/header/customHead";
import Slider from "@components/client/slider/slider";
import BigSlider from "@components/client/slider/bigSlider/bigSlider";
import Titles from '@utils/Titles'
import Detail from "@components/client/HomePage/detail";

import 'keen-slider/keen-slider.min.css'
import { AxiosInstance } from "@utils/http";

const Home = () => {

    return (
        <>
            <CustomHead title={Titles.titles.home} />
            <div className="container mt-4" >
                <div className="w-full relative ">
                    <div className="md:flex md:h-96 h-auto gap-5">
                        <BigSlider />
                        <Detail />
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
