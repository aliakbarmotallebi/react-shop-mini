import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductLinker from '@components/client/Commons/productLinker';
import SearchContext from 'src/context/searchContext';

export default function SearchSuggestItem({ searchedItem }) {


    return (
        <SearchContext.Consumer >
            {({ removeSearchedBox }) => (
                <li
                    className='text-sm border-b p-2 flex items-center'
                    onClick={removeSearchedBox}>
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
            )}
        </SearchContext.Consumer>

    )
}
