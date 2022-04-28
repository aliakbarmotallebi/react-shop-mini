import { useState } from "react"
import AuthContext from "src/context/authContext"
function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
