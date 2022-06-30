import { useContext } from "react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import AlertContext from "src/context/alertContext"
import AuthContext from "src/context/authContext"

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const router = useRouter()
    const [storageUser, setStorageUser] = useState({})
    const alert = useContext(AlertContext)

    useEffect(() => {
        user &&
            localStorage.setItem('user', JSON.stringify(user))

    }, [user])

    useEffect(() => {
        setStorageUser(JSON.parse(localStorage.getItem('user')))
    }, [user])


    const logoutuser = () => {
        localStorage.clear('user')
        setStorageUser({})
        alert.warning('از حساب خود خارج شدید', 5)
    }

    return (
        <AuthContext.Provider value={{
            setUser,
            logoutuser,
            storageUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
