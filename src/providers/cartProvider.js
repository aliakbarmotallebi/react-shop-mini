import React, { useReducer, useState } from 'react'
import CartContext from 'src/context/cartContext'

function cartReducer(total, action) {
    switch (action.type) {
        case 'add':
            total += 1
            return total
        case 'remove':
            total -= 1
            return total
        default:
            return console.log("hichiii")
    }
}

function CartProvider({ children }) {
    const [total, setTotal] = useReducer(cartReducer, 0)
    return (
        <CartContext.Provider value={{
            total, setTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;