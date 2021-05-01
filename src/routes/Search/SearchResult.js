import React, { useContext } from 'react'
import { DogContext } from "../../helpers/DogContext"


const SearchResult = () => {
    const { searchTermKey } = useContext(DogContext);
    const [ searchTerm , setSearchTerm ] = searchTermKey;

    console.log("on Search Component now ...")
    console.log(searchTerm)
    return (
        <div>
            { searchTerm == "Search for breeds by name" ? (
                <p> no search term yet</p>
            ) : (
                <p> {searchTerm} </p>
            )}
            
        </div>
    )
}

export default SearchResult 
