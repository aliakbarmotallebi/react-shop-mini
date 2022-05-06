import { useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from "../../../context/authContext"

function checkout() {

    const { user } = useContext(AuthContext);
    const router = useRouter()

    // checking user
    if (!user) {
        router.push('/');
    }

    return (
        <h1>checkout</h1>
    )
}

export default checkout;