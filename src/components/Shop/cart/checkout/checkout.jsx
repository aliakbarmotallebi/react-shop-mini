import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from 'src/context/authContext'
import CartContext from 'src/context/cartContext'
import CheckOutTotal from './checkOutTotal'

import { AxiosInstance } from '@utils/http'
import AlertContext from 'src/context/alertContext'
import Link from 'next/link'

export default function Checkout() {

    const { storageUser, storageToken } = useContext(AuthContext)
    const { total, totalPrice, goRemoveCart, cartCookie } = useContext(CartContext)
    const alert = useContext(AlertContext)

    const router = useRouter()

    const handleCartSubmit = (event) => {
        event.preventDefault()
        const listOfItems = []

        for (const item of cartCookie) {
            listOfItems.push({ erp_code: item.ErpCode, quantity: item.quantity, attr: '' })
        }

        AxiosInstance.post('orders',
            listOfItems
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
                    <div className='flex-none md:w-2/5 md:px-8 px-2'>
                        <CheckOutTotal total={total} totalPrice={totalPrice} />
                    </div>
                    <div className='md:w-3/5'>

                        <h4 className='text-2xl font-yekan-bold text-gray-500 mb-3'>مشخصات کاربری</h4>


                        <div className='p-3 border rounded-md md:grid md:grid-cols-2 gap-4  flex-row    text-sm font-yekan-bold'>
                            <span className='flex gap-2 md:mb-0 mb-3'>
                                <span className='text-slate-900 '> شماره موبایل :</span>
                                <span className='text-blue-500 underline  decoration-dotted decoration-[1.2px] decoration-blue-500'>
                                    {storageUser?.user?.mobile ? storageUser?.user?.mobile : ''}
                                </span>
                            </span>
                            <span className='flex gap-2 md:mb-0 mb-3'>
                                <span>نام و نام خانوادگی :</span>
                                <span className='text-blue-500 underline  decoration-dotted decoration-[1.2px] decoration-blue-500'>
                                    {storageUser?.user?.name ? storageUser?.user?.name : ''}
                                </span>
                            </span>
                            <span className='flex gap-2 md:mb-0 mb-3'>
                                <span>شماره منزل :</span>
                                <span className='text-blue-500 underline  decoration-dotted decoration-[1.2px] decoration-blue-500'>
                                    {storageUser?.user?.tel ? storageUser?.user?.tel : ''}
                                </span>
                            </span>
                            <span className='flex col-span-2 gap-2 md:mb-0 mb-3'>
                                <span>آدرس </span>
                                <span className='text-blue-500 underline  decoration-dotted decoration-[1.2px] decoration-blue-500'>
                                    {storageUser?.user?.address ? storageUser?.user?.address : ''}

                                </span>
                            </span>


                        </div>
                        <div className='flex justify-end'>


                        </div>

                        <div className='w-full flex justify-between items-center  border border-blue-100 mt-4 p-3 rounded-md font-yekan-bold'>
                            {storageUser?.user?.tel === null || storageUser?.user?.name === null || storageUser?.user?.address === null ?
                                <p className='text-sm'>ابتدا مشخصات خود را در صفحه
                                    <Link href={"/profile"}>
                                        <a className='px-1 text-blue-600'>
                                            پروفایل من
                                        </a>
                                    </Link>
                                    تکمیل کرده سپس خرید خود را نهایی کنید
                                </p>
                                :
                                <>
                                    <p className='text-sm'>اطلاعاتم نیاز به
                                        <Link href={'/profile'}>
                                            <a className='px-1 text-blue-600'>
                                                ویرایش
                                            </a>
                                        </Link>
                                        دارد</p>
                                    <form onSubmit={handleCartSubmit} >
                                        <button type="sumbit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-sm text-xs md:px-5 px-2 py-2 md:py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            ثبت سفارش
                                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                        </button>
                                    </form>
                                </>
                            }
                        </div>

                        {/* {storageUser ?
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
                        } */}


                    </div>

                </div>
            </div >
        </div>
    )
}
