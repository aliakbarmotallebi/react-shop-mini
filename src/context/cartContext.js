const { createContext } = require("react");

const CartContext = createContext({
    total: 0,
    setTotal: () => { },
    cart: [],
    setCart: () => { }
})
export default CartContext