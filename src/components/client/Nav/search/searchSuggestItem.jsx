import React from 'react'
import Image from 'next/image'
import ProductLinker from '@components/client/Commons/productLinker';


export default function SearchSuggestItem({ searchedItem, removeSearchedBox }) {

    function handleSearch() {
        removeSearchedBox()
    }

    return (

        <li
            className='md:text-sm text-xs border-b p-2 flex items-center'
            onClick={handleSearch}>
            <Image
                src={searchedItem.Image}
                width={35}
                height={35}
                className={'self-center'}
            />
            <ProductLinker
                productErpCode={searchedItem.ErpCode}
                productName={searchedItem.Name} >
                <a className='pr-2'>
                    {searchedItem.Name}
                </a>
            </ProductLinker>
        </li>



    )
}
