import { useContext } from 'react';
import { useRouter } from 'next/router';

import AuthContext from "../../../context/authContext"
import Checkout from '@components/Shop/cart/checkout/checkout';
import CustomHead from '@components/client/header/customHead';
import AlertContext from "src/context/alertContext";
import CartContext from 'src/context/cartContext';

function checkout() {

    const { storageUser } = useContext(AuthContext);
    const {cartCookie} = useContext(CartContext)
    const alert = useContext(AlertContext)
    const router = useRouter()
    

    if (!storageUser) {
        router.push('/login');
        alert.info('ابتدا وارد حساب کاربری خود شوید', 5)
    }
    
    if(cartCookie && cartCookie.length <= 0 ){
        router.push('/shop');
        alert.info('سبد خرید شما خالی است', 5)
    }

    return (
        <>
            <CustomHead title='تکمیل سبد خرید' />
            <Checkout />
        </>
    )
}

export default checkout;