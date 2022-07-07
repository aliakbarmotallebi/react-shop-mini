import React, { useEffect } from 'react'

import ProductLinker from '@components/client/Commons/productLinker';

export default function CartItem({ product, cart, setCart, setCartCookie, cartCookie, removeCookie }) {


    function removeItemFromCart(id) {
        const currentCartCookie = [...cartCookie];
        const filtered = currentCartCookie.filter(item => item.ErpCode !== id);
        if (filtered.length === 0) {
            goRemoveCart()
        } else {
            setCartCookie(filtered)
            setCart(filtered);
        }
    }

    function goRemoveCart() {
        removeCookie('cart');
        setCartCookie([]);
        setCart([])
    }

    const handlechange = (event) => {
        let itemProduct
        const updatedCart = []
        event = parseFloat(event)
        for (const label of cart) {
            if (label.ErpCode == product.ErpCode) {
                itemProduct = {
                    Name: label.Name,
                    ErpCode: label.ErpCode,
                    LastBuyPrice: label.LastBuyPrice,
                    quantity: event
                }
            } else {
                itemProduct = {
                    Name: label.Name,
                    ErpCode: label.ErpCode,
                    LastBuyPrice: label.LastBuyPrice,
                    quantity: label.quantity
                }
            }
            updatedCart.push(itemProduct)
        }
        setCartCookie(updatedCart)

    }


    return (
        <tr>


            <td>
                <ProductLinker
                    productErpCode={product.ErpCode}
                    productName={product.Name} >
                    <p className="mb-2 font-yekan-bold md:ml-4 text-xs md:text-sm">{product.Name}</p>

                </ProductLinker>



            </td>
            <td className="justify-center md:justify-start md:flex mt-6">
                <div className="w-20 h-10">
                    <div className="relative flex flex-row w-full h-8">

                        <form >
                            {
                                typeof (product.UnitFew) == 'string' ?
                                    <input type="number"  step={'.25'} min={.25} max={product.Few} onChange={event => handlechange(event.target.value)} defaultValue={product.quantity}
                                        className="md:w-full w-12 font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                    :
                                    <input name='quantity'  type="number" min={1} max={product.Few} onChange={event => handlechange(event.target.value)} defaultValue={product.quantity}
                                        className="md:w-full w-12 font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                            }

                        </form>
                    </div>
                </div>
            </td>
            <td className="hidden text-right md:table-cell">
                <span className="md:text-lg text-sm  font-yekan-bold">
                    {product.LastBuyPrice.toLocaleString("fa-ir")}
                </span>
            </td>
            <td className="text-right">
                <span className="md:text-lg text-sm text-blue-600 font-yekan-bold">
                    {(product.LastBuyPrice * product.quantity).toLocaleString("fa-ir")}
                </span>
            </td>
            <td>
                <button type="submit" onClick={() => removeItemFromCart(product.ErpCode)} className="text-gray-700 md:ml-4  text-red-700 px-3 py-1 rounded-sm ">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={20} height={20} viewBox="0 0 256 256" xmlSpace="preserve">
                        <desc>Created with Fabric.js 1.7.22</desc>
                        <defs>
                        </defs>
                        <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                            <g style={{ "stroke": "none", "stroke-width": "0", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "none", "fill-rule": "nonzero", "opacity": "1" }} transform="translate(-175.05 -175.05) scale(3.89 3.89)">
                                <path d="M 65.179 90 H 24.821 c -4.238 0 -7.752 -3.314 -8 -7.545 L 12.8 13.769 c -0.032 -0.55 0.164 -1.088 0.542 -1.489 c 0.378 -0.401 0.904 -0.628 1.455 -0.628 h 60.408 c 0.551 0 1.077 0.227 1.455 0.628 c 0.378 0.4 0.573 0.939 0.542 1.489 L 73.18 82.455 C 72.931 86.686 69.417 90 65.179 90 z M 16.917 15.652 l 3.897 66.568 C 20.938 84.34 22.698 86 24.821 86 h 40.358 c 2.123 0 3.883 -1.66 4.008 -3.779 l 3.897 -66.568 H 16.917 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#E11D48", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                <path d="M 81.546 15.652 H 8.454 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 73.092 c 1.104 0 2 0.896 2 2 S 82.65 15.652 81.546 15.652 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#E11D48", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                <path d="M 59.056 15.652 H 30.944 c -1.104 0 -2 -0.896 -2 -2 V 7.927 C 28.944 3.556 32.5 0 36.872 0 h 16.256 c 4.371 0 7.928 3.556 7.928 7.927 v 5.725 C 61.056 14.757 60.16 15.652 59.056 15.652 z M 32.944 11.652 h 24.111 V 7.927 C 57.056 5.762 55.294 4 53.128 4 H 36.872 c -2.166 0 -3.927 1.762 -3.927 3.927 V 11.652 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#E11D48", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                <path d="M 58.646 74.634 c -0.039 0 -0.079 -0.001 -0.119 -0.004 c -1.103 -0.064 -1.944 -1.011 -1.88 -2.113 l 2.533 -43.25 c 0.063 -1.103 0.999 -1.946 2.113 -1.88 c 1.103 0.064 1.944 1.011 1.879 2.113 l -2.532 43.25 C 60.579 73.813 59.697 74.634 58.646 74.634 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#E11D48", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                <path d="M 31.354 74.634 c -1.051 0 -1.933 -0.82 -1.995 -1.883 L 26.827 29.5 c -0.064 -1.103 0.777 -2.049 1.88 -2.113 c 1.087 -0.07 2.049 0.777 2.113 1.88 l 2.532 43.25 c 0.064 1.103 -0.777 2.049 -1.88 2.113 C 31.433 74.633 31.393 74.634 31.354 74.634 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#E11D48", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                <path d="M 45 74.634 c -1.104 0 -2 -0.896 -2 -2 v -43.25 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 43.25 C 47 73.738 46.104 74.634 45 74.634 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "#E11D48", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                            </g>
                        </g>
                    </svg>
                </button >
            </td>
        </tr >
    )
}
