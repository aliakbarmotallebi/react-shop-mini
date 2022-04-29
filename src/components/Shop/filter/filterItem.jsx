import React from 'react'
import Router, { useRouter } from 'next/router'

export default function FilterItem({ ...filterItem }) {

    const router = useRouter()
    const { filter } = router.query
    const filterHandleClick = (name) => {

        if (filter && filter === name) {
            router.push('/shop')
        } else {
            Router.push(`/shop?filter=${name}`)
        }
    }
    return (
        <li className={`flex items-center ml-4 p-2  transition-all ${filter && filter == filterItem.name ? 'bg-rose-500 text-white rounded-md' : ''}`}>
            <button onClick={() => filterHandleClick(filterItem.name)}>{filterItem.slug}</button>
        </li>
    )
}
