import { useContext } from "react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import AlertContext from "src/context/alertContext"
import AuthContext from "src/context/authContext"

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState("")
    const router = useRouter()
    const [storageUser, setStorageUser] = useState({})
    const [storageToken, setStorageToken] = useState({})
    const alert = useContext(AlertContext)


    useEffect(() => {
        token &&
            localStorage.setItem('token', JSON.stringify(token))

        setStorageToken(JSON.parse(localStorage.getItem('token')))
    }, [token])

    useEffect(() => {
        user &&
            localStorage.setItem('user', JSON.stringify(user))

        setStorageUser(JSON.parse(localStorage.getItem('user')))

    }, [user])


    const logoutuser = () => {
        localStorage.clear('user')
        localStorage.clear('token')

        setStorageUser()
        setStorageToken()

        router.push('/');

        alert.warning('از حساب خود خارج شدید', 5)
    }


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            logoutuser,
            storageUser,
            setToken,
            storageToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
