import { createContext } from "react";

const SearchContext = createContext({
    searchedQuery : '',
    setSearchedQuery : () => {}
})

export default SearchContext;