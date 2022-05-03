import Image from "next/image";
import React from "react";
import Config from "@utils/Config";
import { fetchProduct } from "@utils/Services";

const product = ({ product }) => {
    return (
        <>
            <div class="py-3 bg-white">
                <div class="mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div class="flex items-center space-x-2 text-gray-400 text-sm">
                        <a href="#" class="hover:underline hover:text-gray-600">Home</a>
                        <span>
                            <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                        <a href="#" class="hover:underline hover:text-gray-600">Electronics</a>
                        <span>
                            <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                        <span>Headphones</span>
                    </div>
                </div>

                <div class=" mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                    <div class="flex flex-col md:flex-row -mx-4">
                        <div className="w-1/3">
                            <div className="m-auto block w-3/4">
                                <Image
                                    className="w-full "
                                    src={product.Image}
                                    layout='responsive'
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div class="px-4">
                            <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.Name}</h2>
                            <ul role="list" class="my-7">
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">  تعداد موجود : {product.Few}</span>
                                </li>
                            </ul>



                            <div class="flex gap-2 py-4">
                                <button className="bg-gray-100 px-3 text-center h-10 self-center">
                                    +
                                </button>
                                <span className="self-center font-bold">
                                    <p className="text-center">
                                        2
                                    </p>
                                </span>
                                <button className="bg-gray-100 px-3 text-center h-10 self-center">
                                    -
                                </button>

                                <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon w-7 h-7" viewBox="0 0 512 512"><title>Cart</title><circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256" /><path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></svg>
                                    افزودن به سبد خرید
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}


export async function getServerSideProps(context) {
    const { erpcode } = context.query;
    const { product_page } = Config.services.product
    const product = await fetchProduct(`${product_page}${erpcode}`);
    if (!product) {
        return {
            notFound: true,
        }
    }
    return { props: product };

}

export default product;