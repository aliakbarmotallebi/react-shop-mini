import { createContext } from "react";

const AlertContext = createContext({
    alert: null,
    setAlert: () => { }
})

export default AlertContext;