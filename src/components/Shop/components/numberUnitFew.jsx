import React from 'react'

export default function NumberUnitFiew({ itemnumber, floatitemNumber }) {
    return (
        <span className="self-center font-bold">
            {itemnumber ? <p className="text-center">
                {itemnumber}
            </p> :
                <p className="text-center">
                    {floatitemNumber}
                </p>
            }

        </span>
    )
}
