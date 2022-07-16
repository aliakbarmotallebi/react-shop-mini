import React, { useContext } from 'react'
import AuthContext from 'src/context/authContext'
import { AxiosInstance } from '@utils/http'
import AlertContext from 'src/context/alertContext'

export default function Profile() {
    const { storageUser, storageToken, setUser } = useContext(AuthContext)
    const alert = useContext(AlertContext)

    const handleChangeProfileDetail = (e) => {

        e.preventDefault()
        const changedUser = {
            name: e.target.fullname.value,
            tel: e.target.tel.value,
            zip_code: "0123456789",
            address: e.target.address.value
        }

        AxiosInstance.post('auth/profile/edit', changedUser, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${storageToken.token}`,
                'Accept': 'application/json'
            }
        }).then(res => {
            storageUser &&
                setUser({ user: { ...storageUser.user, ...changedUser } })
            alert.success('پروفایل شما با موفقیت ویرایش شد')
        })

    }

    return (
        <div className='container my-5'>

            <div className='w-full md:grid grid-cols-4 gap-3'>
                <div className='w-full mb-3'>
                    <div className='border rounded-md '>
                        <div className='bg-slate-100 flex justify-center rounded-md'>
                            <div className='p-4'>
                                <div className='w-14 h-14 m-auto block p-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 256 256" xmlSpace="preserve">
                                        <desc>Created with Fabric.js 1.7.22</desc>
                                        <defs>
                                        </defs>
                                        <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                                            <g style={{ "stroke": "none", "stroke-width": "0", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "none", "fill-rule": "nonzero", "opacity": "1" }} transform="translate(-175.05 -175.05) scale(3.89 3.89)">
                                                <path d="M 44.636 46.449 c -12.806 0 -23.225 -10.418 -23.225 -23.224 C 21.411 10.418 31.83 0 44.636 0 C 57.442 0 67.86 10.418 67.86 23.225 C 67.86 36.031 57.442 46.449 44.636 46.449 z M 44.636 2.967 c -11.17 0 -20.258 9.087 -20.258 20.258 c 0 11.17 9.087 20.257 20.258 20.257 c 11.17 0 20.257 -9.087 20.257 -20.257 C 64.893 12.054 55.806 2.967 44.636 2.967 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "rgb(0,0,0)", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                                <path d="M 73.777 90 H 16.223 c -0.82 0 -1.484 -0.664 -1.484 -1.484 V 73.464 c 0 -12.535 10.199 -22.735 22.734 -22.735 h 15.052 c 12.535 0 22.735 10.199 22.735 22.735 v 15.052 C 75.26 89.336 74.596 90 73.777 90 z M 17.707 87.033 h 54.587 V 73.464 c 0 -10.9 -8.867 -19.768 -19.768 -19.768 H 37.474 c -10.9 0 -19.767 8.867 -19.767 19.768 V 87.033 z" style={{ "stroke": "none", "stroke-width": "1", "stroke-dasharray": "none", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "10", "fill": "rgb(0,0,0)", "fill-rule": "nonzero", "opacity": "1" }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p className='text-lg mt-3'>{storageUser?.user?.mobile}</p>
                            </div>

                        </div>
                        <div className='px-3 py-6'>
                            <ul className='text-sm leading-8'>
                                <li>ویرایش اطلاعات</li>
                                <li className='text-rose-600 cursor-pointer'>خروج از حساب کاربری</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='border rounded-md px-3 py-6 w-full col-span-3'>
                    {/* TODO : validation for this form  */}
                    {storageUser ?
                        <form onSubmit={handleChangeProfileDetail} >
                            <label for="fullname" class="block mt-2 text-sm font-yekan-bold text-gray-600">نام تحویل گیرنده</label>
                            <input defaultValue={storageUser.user?.name} id="fullname" name="fullname" placeholder="نام کامل خود را وارد نمایید" class="block w-full p-3 mt-2 text-gray-900 bg-slate-100  focus:outline-none focus:bg-slate-200 rounded-md" required />
                            <label for="mobile" class="block mt-2 text-sm font-yekan-bold text-gray-600">شماره منزل</label>
                            <input defaultValue={storageUser.user?.tel} id="mobile" name="tel" placeholder="08600000000" class="block w-full p-3 mt-2 text-gray-900 bg-slate-100  focus:outline-none focus:bg-slate-200 rounded-md" required />
                            <label for="address" class="block mt-2 text-sm font-yekan-bold text-gray-600">آدرس</label>
                            <input defaultValue={storageUser.user?.address} id="address" name="address" placeholder="آدرس کامل محل سکونت" class="block w-full p-3 mt-2 text-gray-900 bg-slate-100  focus:outline-none focus:bg-slate-200 rounded-md" required />

                            <button type="sumbit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ویرایش اطلاعات
                            </button>
                        </form> : ''
                    }
                </div>
            </div>
        </div >
    )
}
