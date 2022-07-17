import React, { useEffect, useState } from "react";
import MainContext from "src/context/mainContext";


export default function MainProvider({ children }) {

    const [showModal, setShowModal] = useState(false)
    const [modalProduct, setModalProduct] = useState({})

    const modalHandler = (product) => {
        setShowModal(!showModal)
        setModalProduct(product)
    }

    useEffect(() => {
        console.log(showModal)
    }, [showModal])


    return (
        <MainContext.Provider
            value={{ showModal, setShowModal, modalHandler, modalProduct }}>
            {children}
        </MainContext.Provider>
    )

}