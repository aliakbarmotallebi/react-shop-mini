import Image from "next/image";
import React from "react";
import textToSlug from "@helpers/textToSlug";
import Link from "next/link";

const Card = ({ product }) => {
    return (
        <div className="relative mx-auto w-full">
            <Link href={`/product/${product.ErpCode}/${textToSlug(product.Name)}`}
                className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <a>
                    <div className="shadow p-2 rounded-lg bg-white">

                        <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                            <div className="relative after:w-full after:h-full after:inset-0 after:absolute  transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                                <Image
                                    className="absolute inset-0"
                                    src={product.Image}
                                    layout='responsive'
                                    width={300}
                                    height={300}
                                />
                            </div>


                        </div>
                        <div className="mt-3 mb-1">
                            <h5 className="text-md text-gray-900">{product.Name}</h5>
                        </div>
                        <div className="flex justify-between w-full py-2">
                            <div className="flex gap-1">
                                <button className="group hover:bg-transparent bg-white border-gary-500 border rounded w-7 h-7 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="group-hover:bg-transparent w-full h-full text-gary-500 "
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" class="color000 svgShape"></path></svg>
                                </button>
                                <button className="group hover:bg-transparent bg-white border-gary-500 border rounded w-7 h-7 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="group-hover:bg-transparent w-full h-full text-gary-500 "
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="9" cy="21" r="1" />
                                        <circle cx="20" cy="21" r="1" />
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex">
                                <div className="flex justify-between bg-white space-x-5 rounded-lg overflow-hidden ">
                                    <div><span class="text-gray-900 ml-3 text-xl">{product.SellPrice.toLocaleString("fa-ir")} <span className="text-gray-400 text-sm"> تومان</span></span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </a>
            </Link>
        </div>

    )
}
export default Card
