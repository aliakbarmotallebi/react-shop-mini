import React, { useReducer, useState } from 'react'
import CartContext from 'src/context/cartContext'

function cartReducer(cart, action) {
    switch (action.type) {
        case 'add':
            const cartIndex = cart.findIndex(cartItem => cartItem.product.ErpCode === action.product.product.ErpCode)
            if (cartIndex < 0) {
                return [...cart, action.product]
            }
            return [...cart]


        case 'remove':
            const productItem = cart.findIndex(cartItem => cartItem.Name === action.product.Name)
            if (productItem < 0) {
                return cart;
            }
            const update = [...cart];
            update.splice(productItem, 1)
            return update
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