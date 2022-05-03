import EmptyCart from "@components/Shop/cart/emptyCart"
import { useContext } from "react"
import CartContext from "src/context/cartContext"

export default function Cart() {
    const { total } = useContext(CartContext)
    return (
        total <= 0 && <EmptyCart />
    )
}


