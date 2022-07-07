import React from 'react'

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
                itemProduct = { ...label, quantity: event }
            } else {
                itemProduct = {
                    ...label
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
                    <p className="mb-2 font-yekan-bold  md:ml-4">{product.Name}</p>

                </ProductLinker>

                <button type="submit" onClick={() => removeItemFromCart(product.ErpCode)} className="text-gray-700 md:ml-4">
                    <small className='bg-red-100  text-red-700 px-3 py-1 rounded-sm text-xs'>حذف محصول</small>
                </button >

            </td>
            <td className="justify-center md:justify-start md:flex mt-6">
                <div className="w-20 h-10">
                    <div className="relative flex flex-row w-full h-8">

                        <form >
                            {
                                typeof (product.UnitFew) == 'string' ?
                                    <input type="number" readOnly='' step={'.25'} min={.25} max={product.Few} onChange={event => handlechange(event.target.value)} defaultValue={product.quantity}
                                        className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                    :
                                    <input name='quantity' readOnly='' type="number" min={1} max={product.Few} onChange={event => handlechange(event.target.value)} defaultValue={product.quantity}
                                        className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                            }

                        </form>
                    </div>
                </div>
            </td>
            <td className="hidden text-right md:table-cell">
                <span className="text-lg  font-yekan-bold">
                    {product.LastBuyPrice.toLocaleString("fa-ir")}
                </span>
            </td>
            <td className="text-right">
                <span className="text-lg text-blue-600 font-yekan-bold">
                    {(product.LastBuyPrice * product.quantity).toLocaleString("fa-ir")}
                </span>
            </td>
        </tr >
    )
}
