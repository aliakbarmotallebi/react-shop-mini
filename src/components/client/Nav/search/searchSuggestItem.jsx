import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function SearchSuggestItem({ searchedItem }) {

    return (
        <li className='text-sm border-b p-2 flex items-center'>
            <Image
                src={searchedItem.Image}
                width={35}
                height={35}
                className={'self-center'}
            />
            <Link href="">
                <a className='pr-2'>
                    {searchedItem.Name}
                </a>
            </Link>
        </li>
    )
}
