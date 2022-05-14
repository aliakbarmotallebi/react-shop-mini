import { useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from "../../../context/authContext"
import Checkout from '@components/Shop/cart/checkout/checkout';

function checkout() {

    const { user } = useContext(AuthContext);
    const router = useRouter()

    // checking user
    // if (!user) {
    //     router.push('/');
    // }

    return (
        <Checkout user={user} />
    )
}

export default checkout;