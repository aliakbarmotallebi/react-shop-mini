import React from "react";
import Link from "next/link"


import CustomHead from "@components/client/header/customHead";
import Slider from "@components/client/slider/slider";
import BigSlider from "@components/client/slider/bigSlider/bigSlider";
import Titles from '@utils/Titles'
import Detail from "@components/client/HomePage/detail";
const Home = () => {
    return (
        <>

            <CustomHead title={Titles.titles.home} />
            <div className="container">
                <div className="w-full relative">
                    <div className="md:block hidden one absolute -bottom-4 -right-9"></div>
                    <div className="md:flex  gap-5">
                        <BigSlider />
                        <Detail />
                    </div>
                </div>
                <div className="min-h-96  w-full">
                    <Slider label="محصولات ویژه" sort={3} count={15} />
                </div>
                <div className="min-h-96  w-full">
                    <Slider label="پرفروش ترین" sort={2} count={15} />
                </div>
                <div className="min-h-96  w-full">
                    <Slider label="پربازدیدترین" sort={1} count={15} />
                </div>
            </div>

        </>
    )
}
export default Home
