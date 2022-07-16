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
                setUser({ user: { ...storageUser.user, ...changedUser }})

            alert.success('پروفایل شما با موفقیت ویرایش شد')
        })



    }

    return (
        <div className='container my-5'>
            <div className='w-full md:grid grid-cols-4 gap-3'>
                <div className='w-full mb-3'>
                    <div className='border rounded-md px-3 py-6'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ipsam ipsum officia. Eveniet fugiat nobis soluta error dolores ex, molestias sit voluptas assumenda vero odio ullam nam animi dicta sapiente.
                    </div>
                </div>
                <div className='border rounded-md px-3 py-6 w-full col-span-3'>
                    {console.log(storageUser)}
                    {storageUser ?
                        <form onSubmit={handleChangeProfileDetail} >
                            <label for="fullname" class="block mt-2 text-sm font-yekan-bold text-gray-600">نام تحویل گیرنده</label>
                            <input defaultValue={storageUser.user?.name} id="fullname" name="fullname" placeholder="نام کامل خود را وارد نمایید" class="block w-full p-3 mt-2 text-gray-900 bg-gray-100  focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            <label for="mobile" class="block mt-2 text-sm font-yekan-bold text-gray-600">شماره موبایل</label>
                            <input defaultValue={storageUser.user?.mobile} id="mobile" name="tel" placeholder="09180000000" class="block w-full p-3 mt-2 text-gray-900 bg-gray-100  focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            <label for="address" class="block mt-2 text-sm font-yekan-bold text-gray-600">آدرس</label>
                            <input defaultValue={storageUser.user?.address} id="address" name="address" placeholder="آدرس کامل محل سکونت" class="block w-full p-3 mt-2 text-gray-900 bg-gray-100  focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                            <button type="sumbit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                ویرایش اطلاعات
                            </button>
                        </form> : ''
                    }
                </div>
            </div>
        </div>
    )
}
