import Profile from "@components/panel/profile";
import { useContext } from "react";
import AuthContext from "src/context/authContext";
import { useRouter } from "next/router";
import AlertContext from "src/context/alertContext";


const ProfilePage = () => {
    const { storageUser } = useContext(AuthContext);
    const alert = useContext(AlertContext)
    const router = useRouter()

    if (!storageUser) {

        router.push('/login');
        alert.info('ابتدا وارد حساب کاربری خود شوید', 5)
    }
    return (
        <Profile />
    )
}

export default ProfilePage;