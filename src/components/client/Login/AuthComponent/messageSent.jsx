import React, { useContext, useEffect, useState } from 'react';
import { AxiosInstance } from "@utils/http";
import { useRouter } from 'next/router'
import Config from "@utils/Config";
import Timer from "@components/client/Commons/timer";
import AuthContext from 'src/context/authContext';

const MessageSent = ({ userNumber }) => {
    const [code, setCode] = useState("")
    const { setUser, setToken } = useContext(AuthContext)

    // redirecting 
    const router = useRouter()

    const handleSendCodeSubmit = (event) => {
        event.preventDefault();
        if (code === "") {
            return;
        }
        const { loginAuthVerify } = Config.services.loginAuthVerify
        AxiosInstance.post(loginAuthVerify, {
            "mobile": `${userNumber}`,
            "code": `${code}`
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            setToken({ token: response.data.data.access_token })
            setUser({ user: response.data.data.user })
            router.push('/')
        }).catch((error) => console.log(error))
    }

    return (
        <>
            <form onSubmit={handleSendCodeSubmit}>
                <div className="px-5 py-7">
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                        کد فعال سازی
                    </label>
                    <input type="text" name="code" placeholder="کد فعال سازی پیامک شده را وارد کنید"
                        onChange={e => setCode(e.target.value)}
                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                    <button type="submit"
                        className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        <span className="inline-block ml-2">ورود</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" className="w-4 h-4 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </form>
            <div className="text-center">
                <Timer initialMinute={2} initialSeconds={0} />
            </div>

        </>
    )
};

export default MessageSent;