import Products from "../components/client/Products/Products";
import React from "react";
import Slider from "@components/client/slider/slider";

const Home = ()=> {
    return (
        <>
            <Products/>
            <Slider sort={2} count={10} />
        </>
    )
}
export  default Home