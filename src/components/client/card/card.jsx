import Image from "next/image";
import React from "react";
import Link from "next/link";

import OutOfStock from "../Commons/outOfStock";
import ProductLinker from "../Commons/productLinker";
import TextLimit from "@helpers/textLimit";
import ProductPrice from "@components/Shop/product/productPrice";
import useMediaQuery from "@components/customHooks/useMediaQuery";


const Card = ({ product }) => {
    const isMobile = useMediaQuery()

    return (
        <div className="relative mx-auto w-full my-2 md:h-96 h-72">
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
