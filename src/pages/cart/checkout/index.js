import { useContext } from 'react';
import { useRouter } from 'next/router';

import AuthContext from "../../../context/authContext"
import Checkout from '@components/Shop/cart/checkout/checkout';
import CustomHead from '@components/client/header/customHead';
import AlertContext from "src/context/alertContext";

function checkout() {

    const { user } = useContext(AuthContext);
    const alert = useContext(AlertContext)
    const router = useRouter()

    // checking user
    if (!user) {
        router.push('/login');
        alert.info('ابتدا وارد حساب کاربری خود شوید', 5)
    }

    return (
        <>
            <CustomHead title='تکمیل سبد خرید' />
            <Checkout user={user} />
        </>
    )
}

export default checkout;