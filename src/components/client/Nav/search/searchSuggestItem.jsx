import React from 'react'
import Image from 'next/image'
import ProductLinker from '@components/client/Commons/productLinker';
import SearchContext from 'src/context/searchContext';
import { useContext } from 'react';

export default function SearchSuggestItem({ searchedItem }) {

    const { removeSearchedBox } = useContext(SearchContext)

    function handleSearch() {
        removeSearchedBox()
        document.getElementById('searchForm').reset()
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
