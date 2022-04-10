import React from "react";
import Slider from "@components/client/slider/slider";

const Home = () => {
    return (
        <>
            <div className="h-96  w-full">
                <Slider sort={1} count={10}/>
            </div>
            <div className="h-96  w-full">
                <Slider sort={2} count={10}/>
            </div>
            <div className="h-96  w-full">
                <Slider sort={3} count={10}/>
            </div>
        </>
    )
}
export default Home