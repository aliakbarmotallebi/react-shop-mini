import React from 'react'
import NumberUnitFiew from './numberUnitFew'

export default function ItemDispatcher({ unitFew, ItemDispatch, floatItemDispatch, itemnumber , floatitemNumber }) {
    return (
        <div className='flex gap-3'>
            {typeof (unitFew) == 'number' ?
                <>
                    <button onClick={() => ItemDispatch({ type: "INCREAMENT" })} className="bg-gray-100 px-3 text-center h-10 self-center">
                        +
                    </button>
                    <NumberUnitFiew itemnumber={itemnumber} />
                    <button onClick={() => ItemDispatch({ type: "DECREAMENT" })} className="bg-gray-100 px-3 text-center h-10 self-center">
                        -
                    </button>
                </>
                :
                <>
                    <button onClick={() => floatItemDispatch({ type: "INCREAMENT" })} className="bg-gray-100 px-3 text-center h-10 self-center">
                        +
                    </button>
                    <NumberUnitFiew floatitemNumber={floatitemNumber} />
                    <button onClick={() => floatItemDispatch({ type: "DECREAMENT" })} className="bg-gray-100 px-3 text-center h-10 self-center">
                        -
                    </button>
                </>
            }
        </div>
    )


}
