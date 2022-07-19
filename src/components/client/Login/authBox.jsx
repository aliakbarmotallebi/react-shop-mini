import React, { useContext, useState, useRef, useEffect } from "react"
import Router, { useRouter } from 'next/router'
import Link from 'next/link'

import { AxiosInstance } from "@utils/http";

import MessageSent from "@components/client/Login/AuthComponent/messageSent";
import Config from "@utils/Config";

import AuthContext from "src/context/authContext";
import AlertContext from "src/context/alertContext";


const AuthBox = () => {

    const inputReference = useRef(null);
    const [userNumber, setUserNumber] = useState("")
    const [messageSent, setMessageSent] = useState(false)
    const [otpVerify, setOtpVerify] = useState(false)
    const alert = useContext(AlertContext)
    const { Storageuser } = useContext(AuthContext)
    const router = useRouter()

    if (Storageuser) {
        router.push('/')
        alert.info('شما قبلا وارد شدید')
    }

    useEffect(() => {
        inputReference.current.focus();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!messageSent) {
            if (userNumber === "" || userNumber.length < 10) {
                alert.warning('شماره وارد شده صحیح نمی باشد', 1)
                return;
            }
            const { loginAuth } = Config.services.loginAuth
            AxiosInstance.post(loginAuth, {
                "mobile": `${userNumber}`
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                Router.push({
                    pathname: "/login",
                    query: { "otp": true }
                })
                setOtpVerify(true)
                setMessageSent(true)
            }).catch((error) => alert.warning('لطفا بعد از ۲ دقیقه دوباره تلاش کنید', 5))
        }

    }


    return (
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
            <h1 className="font-yekan-bold text-center text-2xl mb-5">
                ورود به حساب کاربری
            </h1>
            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                {router.query.otp && userNumber && otpVerify ? <MessageSent userNumber={userNumber} /> :
                    <form onSubmit={handleSubmit}>
                        <div className="px-5 py-7">
                            <label className="font-yekan-bold text-sm text-gray-600 pb-1 block">
                                شماره تلفن همراه
                            </label>
                            <input ref={inputReference} type="text" name="phoneNumber" onChange={e => setUserNumber(e.target.value)}
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                            <button type="submit"
                                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-yekan-bold text-center inline-block">
                                <span className="inline-block ml-2">در خواست کد یکبار مصرف</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" className="w-4 h-4 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </form>

                }

            </div>

            <div className="py-5">
                <div className="grid grid-cols-2 gap-1">
                    <div className="text-center sm:text-left whitespace-nowrap">
                        <button
                            className="transition duration-200 mx-5 cursor-pointer no-underline hover:underline hover:text-blue-500 text-sm ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4 inline-block ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="inline-block ml-1">
                                <Link href={'/'}>
                                    <a>
                                        بازگشت به صفحه اصلی
                                    </a>
                                </Link>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default AuthBox;
