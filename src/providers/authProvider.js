import Alert from "@components/client/Alert/alert"
import { useEffect, useState } from "react"
import AuthContext from "src/context/authContext"
function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        user &&
            localStorage.setItem('user', JSON.stringify(user))

    }, [user])





    const logoutuser = () => {
        setUser()
    }
    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            logoutuser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
