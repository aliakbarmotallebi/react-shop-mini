import React, { useContext, useReducer, useEffect, useState } from 'react'
import Image from "next/image";
import CartContext from 'src/context/cartContext';
import CustomHead from '@components/client/header/customHead';
import ProductPrice from './productPrice';
import CategoryLinker from '@components/client/Commons/categoryLinker';
import ItemDispatcher from '../components/itemDispatcher';
import Link from 'next/link';
import { AxiosInstance } from '@utils/http';
import ProductItem from '@components/client/products/productItem';
import OutOfStock from '@components/client/Commons/outOfStock';

export default function Product({ product }) {

    const [relateds, setRelateds] = useState([])
    const [nativeProduct, setNativeProduct] = useState({})
    const { cartCookie,
        ItemDispatch,
        itemnumber,
        floatitemNumber,
        floatItemDispatch,
        showCartButton,
        setShowCartButton,
        handleAddToCart } = useContext(CartContext)

    useEffect(() => {
        setShowCartButton(false)
        const item = cartCookie?.find(item => item.ErpCode == product.ErpCode)
        item && setShowCartButton(true)
    }, [nativeProduct])

    useEffect(() => {
        setNativeProduct(product)
    }, [product])



    useEffect(() => {
        AxiosInstance.get(`products/category/${product.MainGroupErpCode}`, { params: { count: 5 } }).then(res => {
            setRelateds(res.data['data'])
        }).catch(err => {
            console.log(err)
        })
    }, [nativeProduct])



    return (
        <>
            <CustomHead title={product.Name} />
            <div className='container'>
                <div className="pt-3 pb-12 border-b-[1px] ">
                    <div className=" mx-auto mt-6 ">
                        <div className="flex  flex-col md:flex-row ">
                            <div className="md:w-1/3 ">
                                <div className="m-auto block w-3/4 bg-white">
                                    <Image
                                        className="w-full "
                                        src={product.Image}
                                        layout='responsive'
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className="md:px-4 md:w-1/3">
                                <h2 className="md:mb-2 my-2 leading-tight tracking-tight font-yekan-bold text-slate-500  text-xl border-b-[1px] pb-3">{product.Name}</h2>
                                <ul role="list" className="my-7">
                                    <li className="flex space-x-3">
                                        <svg class="w-6 h-6 text-green-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">  ?????????? ?????????? : {product.Few}</span>
                                    </li>
                                </ul>

                            </div>
                            <div className="p-4 md:w-1/3  bg-slate-50 border-slate-200 border-[1px]  rounded-md flex gap-3 justify-between flex-col">
                                <div className='w-full'>
                                    <div className='flex justify-between w-full border-b-[1px] border-slate-100 py-4'>
                                        <span className='font-yekan-bold text-slate-500 self-center'>????????</span>
                                        <ProductPrice lastBuyPrice={product.LastBuyPrice} sellPrice={product.SellPrice} />
                                    </div>
                                    <div className='flex justify-between w-full border-b-[1px] border-slate-100 py-4'>
                                        <span className='font-yekan-bold text-slate-500'>???????? ????????</span>
                                        <CategoryLinker categoryId={product.SideGroupErpCode} categorySlug={product.SideGroupName}>
                                            <span className='w-24 text-center text-slate-400 text-sm'>
                                                {product.SideGroupName}
                                            </span>
                                        </CategoryLinker>

                                    </div>
                                </div>
                                {product?.Few <= 0 ? <div className='flex justify-center'><OutOfStock /></div> :
                                    <div className="flex md:relative fixed bottom-0 right-0 left-0 justify-between items-center w-full gap-2 py-4 z-20 md:bg-none md:bg-inherit bg-white border-t-2 md:border-t-0 md:shadow-none p-3 md:p-0">
                                        {
                                            showCartButton ?
                                                <p className='text-sm'><Link href='/cart'><a>???????????? ?????? ????????</a></Link></p>
                                                :
                                                <>
                                                    <ItemDispatcher
                                                        product={product}
                                                        unitFew={product.UnitFew}
                                                        ItemDispatch={ItemDispatch}
                                                        itemnumber={itemnumber}
                                                        floatItemDispatch={floatItemDispatch}
                                                        floatitemNumber={floatitemNumber}
                                                    />
                                                    <button onClick={() => handleAddToCart(product)} type="button" className="text-blue-600 bg-white md:border-2 border-[1px] border-blue-600 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 md:font-sm font-xs rounded-md transition duration-150 ease-all md:text-sm text-xs md:px-5 px-2 py-2 md:py-2.5 text-center inline-flex items-center mr-2 dark:bg-white ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-7 h-7" viewBox="0 0 512 512"><title>Cart</title><circle cx={176} cy={416} r={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={400} cy={416} r={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 80h64l48 272h256" /><path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                                                        ???????????? ???? ?????? ????????
                                                    </button>
                                                </>
                                        }

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="min-h-96  w-full pt-2">
                    <header className="flex items-center">
                        <h2 className='font-yekan-bold md:text-xl text-lg py-1  md:mb-3 mb-0 '>
                            ?????????????? ??????????
                        </h2>
                    </header>
                    <div className='grid md:grid-cols-5 grid-cols-2 gap-3'>
                        {relateds.map(product => (
                            <ProductItem key={product.Id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
