import { useContext } from 'react';
import { useRouter } from 'next/router';

import AuthContext from "../../../context/authContext"
import Checkout from '@components/Shop/cart/checkout/checkout';
import CustomHead from '@components/client/header/customHead';
import AlertContext from "src/context/alertContext";
import CartContext from 'src/context/cartContext';

function CartCheckout() {

    const { storageUser } = useContext(AuthContext);
    const { cartCookie } = useContext(CartContext)
    const alert = useContext(AlertContext)
    const router = useRouter()

    if (!storageUser) {

        router.push('/login');
        alert.info('ابتدا وارد حساب کاربری خود شوید', 5)
    }

    if (cartCookie && cartCookie.length <= 0) {
        router.push('/shop');
    }

    return (
        <>
            <CustomHead title='تکمیل سبد خرید' />
            <Checkout />
        </>
    )
}

export default CartCheckout;