import Alert from "@components/client/Alert/alert"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import AuthContext from "src/context/authContext"

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const router = useRouter()
    const [storageUser, setStorageUser] = useState({})

    useEffect(() => {
        user &&
            localStorage.setItem('user', JSON.stringify(user))

    }, [user])

    useEffect(() => {
        setStorageUser(JSON.parse(localStorage.getItem('user')))
        console.log(storageUser)
    }, [user])


    const logoutuser = () => {
        localStorage.clear('user')
        setStorageUser({})
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
