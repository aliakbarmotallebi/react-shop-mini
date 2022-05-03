import React, { useReducer, useState } from 'react'
import CartContext from 'src/context/cartContext'

function cartReducer(cart, action) {
    switch (action.type) {
        case 'add':
            return [...cart, action.product]
        case 'remove':
            console.log(cart, "remove")
        default:
            return console.log("hichiii")
    }
}

function CartProvider({ children }) {
    const [cart, setCart] = useReducer(cartReducer, [])
    const [total, setTotal] = useState(0)

    React.useEffect(() => {
        setTotal(cart.length)
    })

    return (
        <CartContext.Provider value={{
            cart, setCart, total
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;