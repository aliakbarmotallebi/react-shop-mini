import React from 'react'
import Router, { useRouter } from 'next/router'

export default function FilterItem({ ...filterItem }) {

    const router = useRouter()
    const { filter } = router.query
    const filterHandleClick = (name, value) => {

        if (filter && filter === name) {
            router.push('/shop')
        } else {
            Router.push(`/shop?filter=${name}&value=${value}`)
        }
    }
    return (
        <li className={`flex items-center ml-4 p-2  transition-all ${filter && filter == filterItem.name ? 'bg-rose-100 rounded-md' : ''}`}>
            <button onClick={() => filterHandleClick(filterItem.name, filterItem.value)}>{filterItem.slug}</button>
        </li>
    )
}
