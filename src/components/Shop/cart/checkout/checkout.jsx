import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from 'src/context/authContext'
import CartContext from 'src/context/cartContext'
import CheckOutTotal from './checkOutTotal'

import { AxiosInstance } from '@utils/http'
import AlertContext from 'src/context/alertContext'

export default function Checkout() {

    const { storageUser, storageToken } = useContext(AuthContext)
    const { total, totalPrice, goRemoveCart } = useContext(CartContext)
    const alert = useContext(AlertContext)

    const router = useRouter()

    const handleCartSubmit = (event) => {
        event.preventDefault()

        AxiosInstance.post('orders',
            [{
                "erp_code": "bAADNA5Ickd4QB4O",
                "quantity": 5,
                "attr": ""
            }]
            , {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${storageToken.token}`
                }
            }
        ).then(res => {
            goRemoveCart()
            alert.success('سفارش شما ثبت شد و به زودی به دست شما خواهد رسید', 5)
            router.push('/')


        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <div className='container'>
            <div className='w-full bg-white p-3 mt-4'>
                <div className='md:flex justify-between'>
                    <div className='md:w-3/5'>
                        <h3 className='text-4xl font-yekan-bold mb-5'>
                            تکمیل حساب
                        </h3>
                        {storageUser ?
                            <form onSubmit={handleCartSubmit} >
                                <label for="fullname" class="block mt-2 text-sm font-yekan-bold text-gray-600">نام تحویل گیرنده</label>
                                <input defaultValue={storageUser.user?.name} id="fullname" name="fullname" placeholder="نام کامل خود را وارد نمایید" class="block w-full p-3 mt-2 text-gray-900 bg-gray-100  focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                                <label for="mobile" class="block mt-2 text-sm font-yekan-bold text-gray-600">شماره موبایل</label>
                                <input defaultValue={storageUser.user?.mobile} id="mobile" name="mobile" placeholder="09180000000" class="block w-full p-3 mt-2 text-gray-900 bg-gray-100  focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                                <label for="address" class="block mt-2 text-sm font-yekan-bold text-gray-600">آدرس</label>
                                <input defaultValue={storageUser.user?.address} id="address" name="address" placeholder="آدرس کامل محل سکونت" class="block w-full p-3 mt-2 text-gray-900 bg-gray-100  focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                                <div className='py-3'>
                                    <h4 className='text-2xl font-yekan-bold text-gray-500 py-2 mb-3 border-b-2'>نحوه پرداخت</h4>
                                    <div class="flex items-center">
                                        <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checked-checkbox" class="mr-2 text-sm font-medium text-gray-600">ارسال درب منزل</label>
                                    </div>
                                </div>
                                <button type="sumbit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                    ثبت سفارش
                                </button>
                            </form> : ''
                        }


                    </div>
                    <div className='flex-none md:w-2/5 md:px-8 px-2 py-2'>
                        <CheckOutTotal total={total} totalPrice={totalPrice} />
                    </div>
                </div>
            </div >
        </div>
    )
}
