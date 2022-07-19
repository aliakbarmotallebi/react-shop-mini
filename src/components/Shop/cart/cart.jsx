import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'

import CartContext from 'src/context/cartContext'
import CartItem from './cartComponent/cartItem'
import EmptyCart from './cartComponent/emptyCart'
import Loading from "@components/client/Commons/loading";
import { AxiosInstance } from '@utils/http'


export default function Cart() {
    const { cartCookie, setCartCookie, goRemoveCart, totalPrice } = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(false)
    const [showCartIsEmpty, setShowCartIsEmpty] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(() => {
        setCart([])
        setIsLoading(true)
        setShowCartIsEmpty(false)
        cartCookie &&
            cartCookie.map(item => (
                AxiosInstance.get('products/' + item.ErpCode).then(res => {
                    setIsLoading(false)
                    setCart(oldCart => [...oldCart, { ...res.data['data'], quantity: item.quantity }])
                })
            ))

        if (!cartCookie || cartCookie?.length <= 0) {
            setIsLoading(false)
            setShowCartIsEmpty(true)
        }

    }, [cartCookie])




    return (
        <div className='container'>
            <h1 className='text-xl py-2 border-b font-yekan-bold'>سبد خرید</h1>

            {showCartIsEmpty ? <EmptyCart /> : <div className="flex justify-center my-6">

                <div className="flex flex-col w-full  text-gray-800 bg-white ">
                    <div className="flex-1">
                        <div>
                            {cart.map(productItem => <CartItem product={productItem} cart={cart} setCart={setCart} setCartCookie={setCartCookie} cartCookie={cartCookie} goRemoveCart={goRemoveCart} />)}
                        </div>
                        {isLoading && <Loading />}
                        <hr className="pb-6 mt-6" />
                        <div className=' p-5  border-[1px] rounded-md mb-4'>
                            <div className='flex justify-between p-2'>
                                <span className='text-sm'>مقدار مجموع سبد خرید</span>
                                <span className='text-lg'>{totalPrice.toLocaleString("fa-ir") + ' تومان '}</span>
                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <Link href={'cart/checkout'}>
                                <a>
                                    <span class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        تکمیل سبد خرید
                                        <svg fill='#fff' className='w-5 h-5 mr-2' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={256} height={256} viewBox="0 0 256 256" xmlSpace="preserve">
                                            <desc>Created with Fabric.js 1.7.22</desc>
                                            <defs>
                                            </defs>
                                            <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                                                <g style={{ "stroke": "none", "stroke-width": "0", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "none", "fill-rule": "nonzero", "opacity": "1" }} transform="translate(-175.05 -175.05) scale(3.89 3.89)">
                                                    <path d="M 2 47 h 86 c 1.104 0 2 -0.896 2 -2 s -0.896 -2 -2 -2 H 2 c -1.104 0 -2 0.896 -2 2 S 0.896 47 2 47 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "rgb(255,255,255)", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                                    <path d="M 15.627 60.627 c 0.512 0 1.023 -0.195 1.414 -0.586 c 0.781 -0.781 0.781 -2.047 0 -2.828 L 4.828 45 l 12.213 -12.212 c 0.781 -0.781 0.781 -2.047 0 -2.828 c -0.781 -0.781 -2.047 -0.781 -2.828 0 L 0.586 43.586 C 0.211 43.961 0 44.47 0 45 s 0.211 1.039 0.586 1.414 l 13.627 13.627 C 14.604 60.432 15.115 60.627 15.627 60.627 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "rgb(255,255,255 )", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>}

        </div>

    )
}
