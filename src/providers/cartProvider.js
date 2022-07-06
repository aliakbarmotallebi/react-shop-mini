import React, { useReducer, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import CartContext from 'src/context/cartContext'

function CartProvider({ children }) {
    const [cookie, setCookie] = useCookies()
    const [cartCookie, setCartCookie] = useState(cookie.cart)
    const [total, setTotal] = useState(0)



    useEffect(() => {
        cookie.cart &&
            setTotal(cookie.cart.length)
    }, [cookie.cart])


    function addItemToCart(product) {
        cartCookie
            ? setCartCookie(oldcart => [...oldcart, product])
            : setCartCookie([product])
    }

    useEffect(() => {
        cartCookie &&
            setCookie('cart', cartCookie, { maxAge: 36000, sameSite: 'lax' })
    }, [cartCookie])

    return (
        <CartContext.Provider value={{
            total, addItemToCart, cartCookie , setCartCookie
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;