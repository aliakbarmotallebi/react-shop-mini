import React from 'react'
import NumberUnitFiew from './numberUnitFew'

export default function ItemDispatcher({ unitFew, ItemDispatch, floatItemDispatch, itemnumber, floatitemNumber, product }) {


    return (

        <div className='grid grid-cols-3 md:gap-3  bg-white p-1 rounded-md md:border-2 border-[1px] border-slate-400'>
            {typeof (unitFew) == 'number' ?
                <>
                    <button onClick={() => ItemDispatch({ type: "INCREAMENT", product })} className="md:text-3xl text-xl px-3 text-center h-10 self-center">
                        +
                    </button>
                    <NumberUnitFiew itemnumber={itemnumber} />
                    <button onClick={() => ItemDispatch({ type: "DECREAMENT", product })} className="md:text-3xl text-xl px-3 text-center h-10 self-center">
                        -
                    </button>
                </>
                :
                <>
                    <button onClick={() => floatItemDispatch({ type: "INCREAMENT", product })} className="md:text-3xl text-xl px-3 text-center h-10 self-center">
                        +
                    </button>
                    <NumberUnitFiew floatitemNumber={floatitemNumber} />
                    <button onClick={() => floatItemDispatch({ type: "DECREAMENT", product })} className="md:text-3xl text-xl px-3 text-center h-10 self-center">
                        -
                    </button>
                </>
            }
        </div>
    )


}
