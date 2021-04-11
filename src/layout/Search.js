import React from 'react'
import styled from 'styled-components';

// Components 
import SearchBar from '../components/Searchbar'
import Filters from '../components/Filters'


const Search = () => {
    return (
        <Div>
            <SearchBar />
            <Filters />
        </Div>
    )
}

export default Search

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`
