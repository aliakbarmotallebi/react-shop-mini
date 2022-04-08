import {useRouter} from "next/router";
import Image from "next/image";
import React from "react";
import Config from "@utils/Config";

import {AxiosInstance} from "@utils/http/index"

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
                    <small className="dark:text-gray-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                        sit sunt praesentium, deleniti iste corrupti harum? Nisi fugit hic
                        rerum.
                    </small>
                    <h2 className=" font-bold text-lg lg:text-4xl my-2 ">
                        {product.Name}
                    </h2>
                    <p className="d text-base lg:w-3/4 text-gray-800 mt-2 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
                        accusamus quidem accusantium consectetur provident doloremque?
                    </p>

                </div>
            </div>
        </>

    )
}
const fetchData = async (params) => await AxiosInstance.get(params)
    .then(res => ({
        product: res.data['data'],
    }))
    .catch((error) => (
            console.log(error)
        ),
    );

export async function getServerSideProps(context) {
    const { erpcode } = context.query;
    console.log( context.query)
    const {product_page} = Config.services.product
    const product = await fetchData(`${product_page}${erpcode}`);
    if (!product) {
        return {
            notFound: true,
        }
    }
    return {props: product};

}

export default product;