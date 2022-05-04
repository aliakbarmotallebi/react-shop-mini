import Image from "next/image";
import React from "react";
import textToSlug from "@helpers/textToSlug";
import Link from "next/link";
import OutOfStock from "../Commons/outOfStock";

const Card = ({ product }) => {
    return (
        <div className="relative mx-auto w-full my-2">
            <Link href={`/product/${product.ErpCode}/${textToSlug(product.Name)}`}
                className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <a>
                    <div className="shadow p-2 rounded-lg bg-white">

                        <div className="flex justify-center relative rounded-lg overflow-hidden h-56">
                            <div className="relative after:w-full after:h-full after:inset-0 after:absolute  transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                                <Image
                                    className="absolute inset-0"
                                    src={product.Image}
                                    layout='fill'
                                    width={300}
                                    height={300}
                                />
                            </div>

                        </div>
                        {product?.Few <= 0 && <OutOfStock />}
                        <div className="mt-3 mb-1">
                            <h5 className="text-md text-gray-800 font-yekan-bold">{product.Name}</h5>
                        </div>
                        <div className="flex justify-between w-full py-2">
                            <div className="flex gap-1">
                                <button className="group hover:shadow transition duration-100 ease-in-out bg-red-700 bg-opacity-10 rounded w-7 h-7 p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        color="#ef4444"
                                        className="group-hover:bg-transparent w-full h-full"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" className="svgShape"></path></svg>
                                </button>
                               
                            </div>
                            <div className="flex">
                                <div className="flex justify-between bg-white space-x-5 rounded-lg overflow-hidden ">
                                    <div><span className="text-blue-600 ml-3 text-xl font-bold">{product.SellPrice.toLocaleString("fa-ir")} <span className="text-gray-300 text-xs"> تومان</span></span></div>
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
