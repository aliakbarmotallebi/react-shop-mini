import React, {useState} from 'react';
import IconInfo from "@components/client/Alert/icons/iconInfo";
import IconSuccess from "@components/client/Alert/icons/iconSuccess";
import IconDanger from "@components/client/Alert/icons/iconDanger";
import IconWarning from "@components/client/Alert/icons/iconWarning";

const Alert = ({type, message}) => {
    const [close, setClose] = useState(false)
    const customType = {
        success: {
            color: "green",
            icon: <IconSuccess/>
        },
        danger: {
            color: "red",
            icon: <IconDanger/>
        },
        info: {
            color: "blue",
            icon: <IconInfo/>

        },
        warning: {
            color: "yellow",
            icon: <IconWarning/>

        },
    }
    const CloseAlert = () => {
        setClose(true)
    }
    return (
        (close ? "" :
                <div className="fixed bottom-10 right-10 z-50 min-w-full">

                    <div
                        className="flex items-center justify-between max-w-xs p-4 bg-white border rounded-md shadow-sm">

                        <div className="flex items-center">
                            {customType[type].icon}
                            <p className={`ml-3 text-sm font-bold text-${customType.hasOwnProperty(type) ? customType[type].color : "gray"}-600`}>{message}</p>
                        </div>
                        <span className="inline-flex items-center cursor-pointer" onClick={CloseAlert}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-600" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </span>
                    </div>
                </div>
        )

    )
};

export default Alert;