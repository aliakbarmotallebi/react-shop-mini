import React, { useEffect, useState } from "react";
import MainContext from "src/context/mainContext";


export default function MainProvider({ children }) {

    const [showModal, setShowModal] = useState(true)

    const modalHandler = () => {
        setShowModal(!showModal)
    }

    useEffect(() => {
        console.log(showModal)
    }, [showModal])


    return (
        <MainContext.Provider
            value={{ showModal, setShowModal, modalHandler }}>
            {children}
        </MainContext.Provider>
    )

}