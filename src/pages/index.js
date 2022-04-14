import React from "react";
import Slider from "@components/client/slider/slider";
import BigSlider from "@components/client/slider/bigSlider/bigSlider";
import Timer from "@components/client/Commons/timer";

const Home = () => {
    return (
        <>
            <div className="flex">
                <BigSlider/>
                <div className="rounded-lg w-3/5 bg-[#ff971d]/80 flex items-center justify-center">
                    <span className="text-2xl text-black ">
                        شهروند مهاجران
                    </span>
                </div>
            </div>

            <div className="h-96  w-full">
                <Slider label="محصولات ویژه" sort={3} count={15}/>
            </div>
            <div className="h-96  w-full">
                <Slider label="پرفروش ترین" sort={2} count={15}/>
            </div>
            <div className="h-96  w-full">
                <Slider label="پربازدیدترین" sort={1} count={15}/>
            </div>

        </>
    )
}
export default Home
