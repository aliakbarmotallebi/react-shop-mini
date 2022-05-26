import React from "react"
import Cart from "@components/Shop/cart/cart";
import CustomHead from "@components/client/header/customHead";

const CartPage = () => {

    return (
        <>
            <CustomHead title='سبد خرید' />
            <Cart />
        </>
    )
}
export default CartPage