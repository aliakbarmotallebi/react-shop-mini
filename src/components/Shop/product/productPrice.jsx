import React from 'react'

export default function ProductPrice({ lastBuyPrice, sellPrice }) {
    const offPrice = Math.round(100 / (sellPrice / (sellPrice - lastBuyPrice)))
    return (

        <div className="flex">
            <div className="justify-between  rounded-lg overflow-hidden ">
                <div>
                    <span className="text-slate-900 text-sm  md:text-xl font-yekan-bold">
                        {lastBuyPrice.toLocaleString("fa-ir")}
                        <span className="text-gray-300 text-xs"> تومان</span>
                    </span>

                </div>
                <div className='flex justify-between gap-2 items-center mt-2'>
                    <span className='bg-rose-500 text-sm text-white  px-2  rounded-tl-full  rounded-tr-full rounded-br-full'>
                        {offPrice != 0 ? offPrice + '%' : ''}
                    </span>
                    {offPrice != 0 ? <span className="text-sm text-gray-400 text-center  line-through">{sellPrice.toLocaleString("fa-ir")}</span> : ''}

                </div>
            </div>
        </div>

    )
}
