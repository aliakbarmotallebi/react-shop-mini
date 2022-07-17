import React, { useContext } from 'react'
import MainContext from 'src/context/mainContext'

export default function ModalProduct() {
    const { modalHandler, showModal } = useContext(MainContext)
    return (
        <>
            {showModal && <div className="fixed z-50 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-40" onClick={() => modalHandler()}>
                <div className="w-[500px]  bg-slate-50    rounded-md border-2 border-slate-200">
                    <div className='border-b  p-3'>
                        <h4>کنسرو ماهی گلکسی ۱۸۰گ</h4>
                    </div>
                    <div className='p-3'>
                        <div className='flex justify-between font-yekan-bold'>
                            <h4>قیمت</h4>
                            <span>5600 تومان</span>
                        </div>
                        <div className='flex justify-between'>
                            
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
