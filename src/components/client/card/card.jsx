import Image from "next/image";
import React from "react";
import Link from "next/link";

import OutOfStock from "../Commons/outOfStock";
import ProductLinker from "../Commons/productLinker";
import TextLimit from "@helpers/textLimit";

const Card = ({ product }) => {
    return (
        <div className="relative mx-auto w-full my-2 h-96">
            <ProductLinker
                productName={product.Name}
                productErpCode={product.ErpCode}
                style={"relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"} >
                <div className="shadow p-2 rounded-lg bg-white h-full">

                    <div className="flex justify-center relative rounded-lg overflow-hidden h-56">
                        <div className="relative after:w-full after:h-full after:inset-0 after:absolute  transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                            <Image
                                className="absolute inset-0"
                                alt={product.Name}
                                src={product.Image}
                                layout='fill'
                                width={300}
                                height={300}
                            />
                        </div>

                    </div>
                    <div className="h-32">
                        <div className="flex flex-col justify-between h-full">
                            <div className="mt-3 mb-1">
                                <h5 className="text-md text-gray-800 font-yekan-bold">{product.Name}</h5>
                            </div>
                            <div className="flex justify-between w-full py-2">
                                <div className="flex gap-1 items-center">
                                    <Link href="">
                                        <a className="text-gray-400">
                                            <span className="text-xs font-yekan-regular">{TextLimit(product.SideGroupName , 20)}</span>
                                        </a>
                                    </Link>
                                </div>
                                {product?.Few <= 0 ? <OutOfStock /> : (
                                    <div className="flex">
                                        <div className="justify-between bg-white space-x-5 rounded-lg overflow-hidden ">
                                            <div>
                                                <span className="text-blue-600  text-xl font-bold">
                                                    {product.LastBuyPrice.toLocaleString("fa-ir")}
                                                    <span className="text-gray-300 text-xs"> تومان</span>
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-400 text-center block line-through">{product.SellPrice.toLocaleString("fa-ir")}</span>
                                        </div>
                                    </div>
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
