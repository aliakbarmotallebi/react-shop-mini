import Image from "next/image";
import React from "react";
import textToSlug from "@helpers/textToSlug";
import Link from "next/link";

const Card = ({product}) => {
    return (
        <div className="relative mx-auto w-full">
            <Link href={`/product/${product.ErpCode}/${textToSlug(product.Name)}`}
            className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
            >
            <div className="shadow p-4 rounded-lg bg-white">
                <div className="absolute top-0 left-0 mt-2 ml-2 p-4 z-20 flex justify-between">
                    <button className="group hover:bg-transparent bg-white border-gary-500 border rounded w-7 h-7">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="group-hover:bg-transparent w-4 text-gary-500 m-auto"
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
                    <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                        <div className="relative after:w-full after:h-full after:inset-0 after:absolute after:bg-gray-800 after:opacity-10 transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                            <Image
                                className="absolute inset-0"
                                src={product.Image}
                                layout='responsive'
                                width={300}
                                height={300}
                            />
                        </div>

                        <div className="absolute flex justify-center bottom-0 mb-3">
                            <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                                <p className="flex items-center font-medium text-gray-800">
                                    20,000 تومان
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-center">
                        <h5 className="text-sm">{product.Name}</h5>
                    </div>

                </div>
            </Link>
        </div>

    )
}
export default Card
