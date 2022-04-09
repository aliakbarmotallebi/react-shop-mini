import Products from "../components/client/Products/Products";
import React from "react";
import Slider from "@components/client/slider/slider";

const Home = ()=> {
    return (
        <>
            <Slider sort={1} count={10} />
            <Slider sort={2} count={10} />
            <Slider sort={3} count={10} />
        </>
    )
}
export  default Home