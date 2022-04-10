import Image from "next/image";
import React from "react";
import Config from "@utils/Config";
import {fetchProduct} from "@utils/Services";

const product = ({product}) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-around items-center lg:mx-10 py-8">
                <div className="w-1/2">
                    <Image
                        className="hover:grow hover:shadow-lg rounded-md"
                        src={product.Image}
                        layout='responsive'
                        width={300}
                        height={300}
                    />
                </div>
                <div className="lg:w-2/3 w-1/2 mt-4 lg:mt-0 pl-4">
                    <h2 className=" font-bold text-lg lg:text-4xl my-2 ">
                        {product.Name}
                    </h2>
                    <p className="d text-base lg:w-3/4 text-green-500 mt-2 mr-2">
                        {product.SellPrice + ' تومانننننن '}
                    </p>
                </div>
            </div>
        </>

    )
}


export async function getServerSideProps(context) {
    const {erpcode} = context.query;
    const {product_page} = Config.services.product
    const product = await fetchProduct(`${product_page}${erpcode}`);
    if (!product) {
        return {
            notFound: true,
        }
    }
    return {props: product};

}

export default product;