const { createContext } = require("react");

const CartContext = createContext({
    total: 0,
    setTotal: () => { },
    cart: [],
    cartCookie: [],
    setCart: () => { },
    cartCookie: [],
})
export default CartContext