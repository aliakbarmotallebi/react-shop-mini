import Profile from "@components/panel/profile";
import { useContext } from "react";
import AuthContext from "src/context/authContext";
import { useRouter } from "next/router";
import AlertContext from "src/context/alertContext";
import CustomHead from "@components/client/header/customHead";
import Titles from "@utils/Titles";


const ProfilePage = () => {
    const { storageUser } = useContext(AuthContext);
    const alert = useContext(AlertContext)
    const router = useRouter()

    if (!storageUser) {

        router.push('/login');
        alert.info('ابتدا وارد حساب کاربری خود شوید', 5)
    }
    return (
        <>
            <CustomHead title={Titles.titles.profile} />
            <Profile />
        </>
    )
}

export default ProfilePage;