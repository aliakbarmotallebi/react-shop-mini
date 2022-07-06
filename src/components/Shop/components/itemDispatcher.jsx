import React from 'react'
import NumberUnitFiew from './numberUnitFew'

export default function ItemDispatcher({ unitFew, ItemDispatch, floatItemDispatch, itemnumber , floatitemNumber }) {
    return (
        <div className='grid grid-cols-3 gap-3 bg-white p-1 rounded-md border-2 border-slate-400'>
            {typeof (unitFew) == 'number' ?
                <>
                    <button onClick={() => ItemDispatch({ type: "INCREAMENT" })} className="text-3xl px-3 text-center h-10 self-center">
                        +
                    </button>
                    <NumberUnitFiew itemnumber={itemnumber} />
                    <button onClick={() => ItemDispatch({ type: "DECREAMENT" })} className="text-3xl px-3 text-center h-10 self-center">
                        -
                    </button>
                </>
                :
                <>
                    <button onClick={() => floatItemDispatch({ type: "INCREAMENT" })} className="text-3xl px-3 text-center h-10 self-center">
                        +
                    </button>
                    <NumberUnitFiew floatitemNumber={floatitemNumber} />
                    <button onClick={() => floatItemDispatch({ type: "DECREAMENT" })} className="text-3xl px-3 text-center h-10 self-center">
                        -
                    </button>
                </>
            }
        </div>
    )


}
