import React from 'react'
import AuthContext from 'src/context/authContext'

export default function Checkout() {
    return (
        <div className='w-full bg-white p-3'>
            <div className='flex justify-between'>
                <div className='w-3/5'>
                    <h3 className='text-4xl font-yekan-bold mb-5'>
                        تکمیل حساب
                    </h3>
                    <AuthContext.Consumer>
                        {({ user }) => (user && (
                            <form action="">
                                <label for="fullname" class="block mt-2 text-sm font-yekan-bold text-gray-600">نام تحویل گیرنده</label>
                                <input value={user.user.name} id="fullname" name="fullname" placeholder="نام کامل خود را وارد نمایید" class="block w-full p-3 mt-2 text-gray-900 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                                <label for="mobile" class="block mt-2 text-sm font-yekan-bold text-gray-600">شماره موبایل</label>
                                <input value={user.user.mobile} id="mobile" name="mobile" placeholder="09180000000" class="block w-full p-3 mt-2 text-gray-900 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                                <label for="address" class="block mt-2 text-sm font-yekan-bold text-gray-600">آدرس</label>
                                <input value={user.user.address} id="address" name="address" placeholder="آدرس کامل محل سکونت" class="block w-full p-3 mt-2 text-gray-900 bg-gray-100 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                                <button type='submit' className='px-8 py-2 bg-green-600 rounded-sm text-white mt-6'>
                                    ثبت سفارش
                                </button>
                            </form>)

                        )}
                    </AuthContext.Consumer>

                </div>
                <div className='flex-none w-2/5 px-8 py-2'>
                    <div className='w-full border-2 border-gray-200 rounded-md h-80 p-3'>
                        <h4 className='text-2xl font-yekan-bold text-gray-500 mb-3'>جزییات فاکتور</h4>
                        <div className='flex justify-between border-b-2 border-gray-100 p-3'>
                            <span>تعداد اقلام</span>
                            <span className='justify-center'>5</span>
                        </div>
                        <div className='flex justify-between border-b-2 border-gray-100 p-3'>
                            <span>جمع مبلغ سفارش</span>
                            <span className='justify-center'>25000
                                <small className='text-gray-400'> تومان </small>
                            </span>
                        </div>

                        <div className='flex justify-between border-b-2 border-gray-100 p-3'>
                            <span>هزینه ارسال</span>
                            <span className='justify-center'>3000
                                <small className='text-gray-400'> تومان </small>
                            </span>
                        </div>
                        <div className='flex justify-between p-3'>
                            <span>قابل پرداخت</span>
                            <span className='justify-center text-xl font-yekan-bold text-blue-600'>28000
                                <small className='text-gray-400'> تومان </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
