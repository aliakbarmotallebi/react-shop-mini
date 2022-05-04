import React from 'react'
import CartContext from 'src/context/cartContext'
import CartItem from './cartComponent/cartItem'
import EmptyCart from './cartComponent/emptyCart'

export default function Cart() {
    return (
        <CartContext.Consumer >
            {({ cart }) => (
                cart.length <= 0 ? <EmptyCart /> :
                    (
                        <div className="flex justify-center my-6">
                            <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y">
                                <div className="flex-1">
                                    <table className="w-full text-sm lg:text-base" cellSpacing="0">
                                        <thead className='font-yekan-bold text-slate-600'>
                                            <tr className="h-12">
                                                <th className="hidden md:table-cell"></th>
                                                <th className="text-right">محصول</th>
                                                <th className="lg:text-right text-right pl-5 lg:pl-0">
                                                    <span className="lg:hidden" title="Quantity">Qtd</span>
                                                    <span className="hidden lg:inline">تعداد</span>
                                                </th>
                                                <th className="hidden text-right md:table-cell">قیمت واحد</th>
                                                <th className="text-right">قیمت مجموع</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart && (cart.map((cartItem) => (
                                                <CartItem cartItem={cartItem} />
                                            )))}

                                        </tbody>
                                    </table>
                                    <hr className="pb-6 mt-6" />
                                </div>
                            </div>
                        </div>
                    )
            )}

        </CartContext.Consumer>

    )
}
