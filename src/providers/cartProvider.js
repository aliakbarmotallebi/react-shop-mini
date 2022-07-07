import React, { useReducer, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import CartContext from 'src/context/cartContext'

function CartProvider({ children }) {
    const [cookie, setCookie, removeCookie] = useCookies()
    const [cartCookie, setCartCookie] = useState(cookie.cart)
    const [totalPrice, setTotalPrice] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        cookie.cart &&
            setTotal(cookie.cart.length)

    }, [cookie])

    useEffect(() => {
        let price = 0
        cartCookie &&
            setCookie('cart', cartCookie, { maxAge: 36000, sameSite: 'lax' })


        if (cartCookie) {
            for (const item of cartCookie) {
                price += item.LastBuyPrice * item.quantity
            }
            setTotalPrice(price)

        }

    }, [cartCookie])


    function addItemToCart(product) {
        cartCookie
            ? setCartCookie(oldcart => [...oldcart, product])
            : setCartCookie([product])
    }



    return (
        <CartContext.Provider value={{
            total,
            addItemToCart,
            cartCookie,
            setCartCookie,
            totalPrice,
            removeCookie

        }}>

            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;