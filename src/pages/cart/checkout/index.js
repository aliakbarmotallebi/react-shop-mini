import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import AuthContext from "../../../context/authContext"
import Checkout from '@components/Shop/cart/checkout/checkout';
import CustomHead from '@components/client/header/customHead';
import AlertContext from "src/context/alertContext";

function checkout() {

    const { storageUser } = useContext(AuthContext);
    const alert = useContext(AlertContext)
    const router = useRouter()
    
    // checking user

    if (!storageUser) {
        router.push('/login');
        alert.info('ابتدا وارد حساب کاربری خود شوید', 5)
    }
    // dynamic redirect most use
    

    return (
        <>
            <CustomHead title='تکمیل سبد خرید' />
            <Checkout />
        </>
    )
}

export default checkout;