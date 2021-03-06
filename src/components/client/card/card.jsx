import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Link from "next/link";

import OutOfStock from "../Commons/outOfStock";
import ProductLinker from "../Commons/productLinker";
import TextLimit from "@helpers/textLimit";
import ProductPrice from "@components/Shop/product/productPrice";
import useMediaQuery from "@components/customHooks/useMediaQuery";
import MainContext from "src/context/mainContext";
import CartContext from "src/context/cartContext";
import { useState } from "react";


const Card = ({ product }) => {
    const { modalHandler, showModal } = useContext(MainContext)
    const { cartCookie } = useContext(CartContext)
    const [showBasket, setShowBasket] = useState(false)
    const isMobile = useMediaQuery()

    useEffect(() => {
        const item = cartCookie?.find(item => item.ErpCode == product.ErpCode)
        item && setShowBasket(true)
    }, [showModal])


    return (
        <div className="relative mx-auto w-full my-2 md:h-96 h-72 z-10">
            {showBasket ?
                <Link href={'/cart'}>
                    <a>
                        <span className="absolute md:top-4 md:right-4 top-2 right-2 bg-white border border-rose-500  p-2 z-20 w-11 h-11 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 256 256" xmlSpace="preserve">
                                <desc>Created with Fabric.js 1.7.22</desc>
                                <defs>
                                </defs>
                                <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                                    <g style={{ "stroke": "none", "stroke-width": "0", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "none", "fill-rule": "nonzero", "opacity": "1" }} transform="translate(-175.05 -175.05) scale(3.89 3.89)">
                                        <path d="M 89 46.173 c -0.244 0 -0.488 -0.089 -0.681 -0.267 c -29.148 -27.059 -57.489 -27.059 -86.639 0 c -0.404 0.374 -1.038 0.352 -1.413 -0.053 s -0.352 -1.037 0.053 -1.413 c 29.648 -27.522 59.713 -27.521 89.361 0 c 0.404 0.376 0.428 1.008 0.052 1.413 C 89.536 46.065 89.269 46.173 89 46.173 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#EF4444", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                        <path d="M 45 66.03 c -8.639 0 -15.667 -7.028 -15.667 -15.667 S 36.361 34.697 45 34.697 s 15.667 7.028 15.667 15.667 S 53.639 66.03 45 66.03 z M 45 36.697 c -7.536 0 -13.667 6.131 -13.667 13.667 c 0 7.536 6.131 13.667 13.667 13.667 c 7.536 0 13.667 -6.131 13.667 -13.667 C 58.667 42.828 52.536 36.697 45 36.697 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#EF4444", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </a>
                </Link>
                :
                <span className="absolute md:top-4 md:right-4 top-2 right-2 bg-white border border-rose-500  p-3 z-20 w-11 h-11 rounded-full" onClick={() => modalHandler({ product })}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 256 256" xmlSpace="preserve">
                        <desc>Created with Fabric.js 1.7.22</desc>
                        <defs>
                        </defs>
                        <g transform="translate(128 128) scale(0.72 0.72)" style={{}} fill="#fff">
                            <g style={{ "stroke": "none", "stroke-width": "0", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "none", "fill-rule": "nonzero", "opacity": "1" }} transform="translate(-175.05 -175.05) scale(3.89 3.89)">
                                <path d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 h -6.021 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 H 86.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#EF4444", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                <circle cx="28.88" cy="74.33" r="6.16" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#EF4444", "fill-rule": "nonzero", "opacity": "1" }} transform="  matrix(1 0 0 1 0 0) " />
                                <circle cx="74.59" cy="74.33" r="6.16" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#EF4444", "fill-rule": "nonzero", "opacity": "1" }} transform="  matrix(1 0 0 1 0 0) " />
                                <path d="M 62.278 19.546 H 52.237 V 9.506 c 0 -1.933 -1.567 -3.5 -3.5 -3.5 s -3.5 1.567 -3.5 3.5 v 10.04 h -10.04 c -1.933 0 -3.5 1.567 -3.5 3.5 s 1.567 3.5 3.5 3.5 h 10.04 v 10.04 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -10.04 h 10.041 c 1.933 0 3.5 -1.567 3.5 -3.5 S 64.211 19.546 62.278 19.546 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#EF4444", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                            </g>
                        </g>
                    </svg>
                </span>
            }

            <ProductLinker
                productName={product.Name}
                productErpCode={product.ErpCode}
                style={"relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"} >
                <div className="border hover:border-gray-300 transition duration-150 p-2 rounded-lg bg-white h-full">

                    <div className="flex justify-center relative rounded-lg overflow-hidden md:h-56">
                        <div className="relative after:w-full after:h-full after:inset-0 after:absolute  transition-transform duration-500 transform ease-in-out hover:scale-110 w-full h-36 md:h-full">
                            <Image
                                className="absolute inset-0"
                                alt={product.Name}
                                src={product.Image}
                                layout='fill'
                                width={130}
                                height={130}
                            />
                        </div>

                    </div>
                    <div className="h-32">
                        <div className="flex flex-col justify-between md:h-full h-28">
                            <div className="mt-3 mb-1">
                                <h5 className="text-xs md:text-sm text-gray-800 font-yekan-bold">{product.Name}</h5>
                            </div>
                            <div className="flex justify-between w-full md:py-2 py-1">
                                {!isMobile && <div className="flex gap-1 items-center">

                                    <Link href="" >
                                        <a className="text-gray-400 ">
                                            <span className="text-xs font-yekan-regular ">{TextLimit(product.SideGroupName, 20)}</span>
                                        </a>
                                    </Link>
                                </div>}

                                {product?.Few <= 0 ? <OutOfStock /> : (
                                    <ProductPrice lastBuyPrice={product.LastBuyPrice} sellPrice={product.SellPrice} />
                                )}
                            </div>
                        </div>
                    </div>

                </div>


            </ProductLinker>
        </div>

    )
}
export default Card
