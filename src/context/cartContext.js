const { createContext } = require("react");

const CartContext = createContext({
    total : 0,
    setTotal : () => {}
})
export default CartContext