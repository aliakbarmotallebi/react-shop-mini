import { useState } from "react";
import SearchContext from "src/context/searchContext";

function SearchProvider({ children }) {

    const [searchedQuery, setSearchedQuery] = useState('')

    const removeSearchedBox = () => {
        setSearchedQuery('')
        document.getElementById('searchForm').reset()
    }

    return (
        <SearchContext.Provider value={{ searchedQuery, setSearchedQuery, removeSearchedBox }}>
            {children}
        </SearchContext.Provider>

    )

}
export default SearchProvider