import React from 'react'
import SearchSuggestItem from './searchSuggestItem'


export default function SearchSuggest({ searchedItems, searchedQuery, removeSearchedBox }) {



    return (
        searchedQuery.length >= 2 ? (<div className='absolute top-11 right-0 left-0 bg-white border'>
            <ul>
                <li className='text-sm border-b p-2 flex items-center'>
                    <p>  جست و جو محصول  :
                        {searchedQuery}
                    </p>
                </li>
                {searchedItems.map(searchedItem => (
                    <SearchSuggestItem searchedItem={searchedItem} removeSearchedBox={removeSearchedBox} />
                ))
                }
            </ul>
        </div>) : ''

    )
}
