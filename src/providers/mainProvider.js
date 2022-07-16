import React, { useState } from "react";
import MainContext from "src/context/mainContext";


export default function MainProvider({ children }) {

    const [showModal, setShowModal] = useState(false)


    return (
        <MainContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </MainContext.Provider>
    )

}