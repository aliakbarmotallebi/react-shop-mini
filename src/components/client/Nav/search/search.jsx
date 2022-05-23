import React, { useEffect, useState, useContext } from 'react'
import SearchSuggest from './searchSuggest'
import { AxiosInstance } from '@utils/http'
import Config from "@utils/Config"
import SearchLoadin from '@components/client/Commons/searchLoadin'
import SearchContext from 'src/context/searchContext'


export default function Search() {
    const { searchedQuery, setSearchedQuery } = useContext(SearchContext)
    const [searchedItems, setSearchedItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)




    useEffect(() => {
        const { search } = Config.services.search
        if (searchedQuery.length <= 2) return
        setIsLoading(true)
        AxiosInstance.get(search, {
            params: {
                q: searchedQuery,
                count: 3
            }
        }).then((response) => {
            setSearchedItems(response.data['data'])
            console.log(response)
            setIsLoading(false)
        }).catch(err => console.log(err))
    }, [searchedQuery])




    return (
        <>
            <form action="/search" className='relative'>
                <i className="absolute top-2 right-1">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 30 30" style={{ "fill": "#D1D5DB" }}><path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z" /></svg>
                </i>
                <input
                    autoComplete="off"
                    type='search'
                    className=" bg-gray-50 border border-gray-100 h-10 px-5 rounded-lg text-xs focus:outline-none w-full pr-9"
                    name="q" placeholder="جستجوی محصولات"
                    value={searchedQuery.value}
                    onChange={event => setSearchedQuery(event.target.value)}
                />
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4" />
                {isLoading ? <SearchLoadin /> : <SearchSuggest searchedItems={searchedItems} searchedQuery={searchedQuery} />}
            </form>
        </>

    )
}
