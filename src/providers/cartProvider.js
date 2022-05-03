import React, { useState } from 'react'
import CartContext from 'src/context/cartContext'
function CartProvider({ children }) {
    const [total , setTotal] = useState(0)
    return (
        <CartContext.Provider value={{
            total , setTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;