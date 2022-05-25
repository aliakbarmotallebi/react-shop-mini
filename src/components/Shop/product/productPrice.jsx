import React from 'react'

export default function ProductPrice({ lastBuyPrice, sellPrice }) {
    return (

        <div className="flex">
            <div className="justify-between bg-white space-x-5 rounded-lg overflow-hidden ">
                <div>
                    <span className="text-blue-600  text-xl font-bold">
                        {lastBuyPrice.toLocaleString("fa-ir")}
                        <span className="text-gray-300 text-xs"> تومان</span>
                    </span>
                </div>
                <span className="text-sm text-gray-400 text-center block line-through">{sellPrice.toLocaleString("fa-ir")}</span>
            </div>
        </div>

    )
}
