import React from "react";
import Slider from "@components/client/slider/slider";

const Home = () => {
    return (
        <>
            <div className="h-96  w-full">
                <Slider sort={3} count={15}/>
            </div>
            <div className="h-96  w-full">
                <Slider sort={2} count={15}/>
            </div>
            <div className="h-96  w-full">
                <Slider sort={1} count={15}/>
            </div>

        </>
    )
}
export default Home