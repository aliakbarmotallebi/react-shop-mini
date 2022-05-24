import React from 'react';

import IconInfo from "@components/client/Alert/icons/iconInfo";
import IconSuccess from "@components/client/Alert/icons/iconSuccess";
import IconDanger from "@components/client/Alert/icons/iconDanger";
import IconWarning from "@components/client/Alert/icons/iconWarning";

const Alert = ({ type, message }) => {
    const customType = {
        success: {
            color: "green",
            icon: <IconSuccess />
        },
        danger: {
            color: "red",
            icon: <IconDanger />
        },
        info: {
            color: "blue",
            icon: <IconInfo />

        },
        warning: {
            color: "yellow",
            icon: <IconWarning />

        },
    }

    return (

        <div className="fixed bottom-10 right-10 z-50 min-w-full">

            <div className="flex items-center justify-between max-w-xs p-4 bg-white border rounded-md shadow-sm mb-2">

                <div className="flex items-center">
                    {customType[type]?.icon}
                    <p className={`mr-1 text-sm font-yekan-bold text-${customType.hasOwnProperty(type) ? customType[type].color : "gray"}-600`}>{message}</p>
                </div>

            </div>
        </div>
    )

};

export default Alert;