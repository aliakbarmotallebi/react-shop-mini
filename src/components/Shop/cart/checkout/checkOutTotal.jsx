import { useState, useEffect } from "react"


export default function CheckOutTotal({ total, totalPrice }) {

    const [courier, setCourier] = useState(0)
    const [lastTotal, setLastTotal] = useState(0)

    useEffect(() => {
        totalPrice < 50000 ? setCourier(3000) : setCourier(0)
    }, [totalPrice])


    useEffect(() => {
        setLastTotal(totalPrice + courier)
    }, [courier])


    return (
        <div className='w-full rounded-md h-80 p-3'>
            <h4 className='text-2xl font-yekan-bold text-gray-500 mb-3'>جزییات فاکتور</h4>
            <div className='flex justify-between border-b-2 border-gray-100 p-3'>
                <span>تعداد اقلام</span>
                <span className='justify-center'>{total}</span>
            </div>
            <div className='flex justify-between border-b-2 border-gray-100 p-3'>
                <span>جمع مبلغ سفارش</span>
                <span className='justify-center'>{totalPrice.toLocaleString("fa-ir")}
                    <small className='text-gray-400'> تومان </small>
                </span>
            </div>
 
 
            <div className='flex justify-between border-b-2 border-gray-100 p-3'>
                <span>هزینه ارسال</span>
                {courier == 0 ? ' رایگان ; )' : <span className='justify-center'>{courier}<small className='text-gray-400'> تومان </small></span>}

            </div>
            <div className='flex justify-between p-3'>
                <span>قابل پرداخت</span>
                <span className='justify-center text-xl font-yekan-bold text-blue-600'>{lastTotal.toLocaleString("fa-ir")}
                    <small className='text-gray-400'> تومان </small>
                </span>
            </div>
            {totalPrice < 50000 && <div class="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div className='font-yekan-bold text-sm'>
                    با خرید بیشتر از ۵۰۰۰۰ تومان هزینه پیک رایگان میشود
                </div>
            </div>}
        </div>
    )
}
