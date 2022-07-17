import ItemDispatcher from '@components/Shop/components/itemDispatcher'
import React, { useContext } from 'react'
import CartContext from 'src/context/cartContext'
import MainContext from 'src/context/mainContext'
import OutOfStock from './outOfStock'

export default function ModalProduct({ product }) {
    const { modalHandler, showModal } = useContext(MainContext)
    const { handleAddToCart, ItemDispatch, itemnumber, floatItemDispatch, floatitemNumber } = useContext(CartContext)
    const handleModalWithAddToCart = (product) => {
        handleAddToCart(product)
        modalHandler()
    }
    return (
        <>
            {showModal &&
                <div  >
                    <div className='fixed top-0 left-0 bottom-0 right-0 z-30 bg-black bg-opacity-40' onClick={() => modalHandler()}></div>

                    <div className='absolute right-2/4 top-2/4 flex items-center justify-center z-40 '>
                        <div className="bg-slate-50 rounded-md border-2 border-slate-200 z-50 fixed min-w-[280px]">
                            <div className='border-b text-sm  p-3'>
                                <h4>{product?.Name}</h4>
                            </div>
                            <div className='p-3'>
                                <div className='flex justify-between font-yekan-bold text-lg mb-4'>
                                    <h4>قیمت</h4>
                                    <span>
                                        {product?.LastBuyPrice.toLocaleString("fa-ir")}
                                        تومان
                                    </span>
                                </div>
                                {product?.Few <= 0 ? <div className='flex justify-center'><OutOfStock /></div> :
                                    <div className='flex justify-between gap-3 z-50'>
                                        <ItemDispatcher product={product}
                                            unitFew={product?.UnitFew}
                                            ItemDispatch={ItemDispatch}
                                            itemnumber={itemnumber}
                                            floatItemDispatch={floatItemDispatch}
                                            floatitemNumber={floatitemNumber} />
                                        <button onClick={() => handleModalWithAddToCart(product)} type="button" className="text-blue-600 bg-white md:border-2 border-[1px] border-blue-600 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 md:font-sm font-xs rounded-md transition duration-150 ease-all md:text-sm text-xs md:px-5 px-2 py-2 md:py-2.5 text-center inline-flex items-center mr-2 dark:bg-white ">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-7 h-7" viewBox="0 0 512 512"><title>Cart</title><circle cx={176} cy={416} r={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><circle cx={400} cy={416} r={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 80h64l48 272h256" /><path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} /></svg>
                                            افزودن به سبد خرید
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
