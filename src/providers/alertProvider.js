import React, { useState } from 'react'

import AlertContext from 'src/context/alertContext'

export default function AlertProvider({ children }) {

    const [alert, setAlert] = useState(null)
    const [alertText, setAlertText] = useState(null)



    return (
        <AlertContext.Provider
            value={{
                alert,
                alertText,
                success: (text, timeout) => {
                    setAlertText(text);
                    setAlert('success');
                    setTimeout(() => {
                        setAlert(null);
                    }, timeout * 1000 || 4000)
                },
                warning: (text, timeout) => {
                    setAlertText(text);
                    setAlert('warning');
                    setTimeout(() => {
                        setAlert(null);
                    }, timeout * 1000 || 4000)
                },
                danger: (text, timeout) => {
                    setAlertText(text);
                    setAlert('danger');
                    setTimeout(() => {
                        setAlert(null);
                    }, timeout * 1000 || 4000)
                },
                info: (text, timeout) => {
                    setAlertText(text);
                    setAlert('info');
                    setTimeout(() => {
                        setAlert(null);
                    }, timeout * 1000 || 4000)
                },
            }}

        >
            {children}
        </AlertContext.Provider>
    )
}
