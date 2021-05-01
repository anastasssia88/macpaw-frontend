import React, { useContext, useState, useEffect } from 'react'
import { DogContext } from "../../helpers/DogContext";
import styled from "styled-components";
import axios from "axios"

import Loader from "../../components/Shared/Loader";
import Layout from "../../components/Shared/Layout"
import Wrapper from "../../components/Shared/Wrapper"
import GoBack from "../../components/Shared/GoBack";


const SearchResult = () => {
    const { searchTermKey } = useContext(DogContext);
    const [ searchTerm , setSearchTerm ] = searchTermKey;

    const [ loading, setLoading ] = useState(false);
    const [ dogs, setDogs ] = useState({});
    
    useEffect(() => { 
        const fetchData = async () => {
            setLoading(true);
            const response = await axios(
                `https://api.thedogapi.com/v1/images/search?limit=20&breed_id=${searchTerm}`
            );
            setDogs(response.data);
            setLoading(false);
            };
        fetchData(); 
      }, []);
 

    return (
            <>
            { searchTerm == "Search for breeds by name" ? (
                <Layout flexCol >
                    <Wrapper> 
                        <GoBack btnContent="search" />
                        <SearchInfo>No search term. Feel free to browser breeds by typing a breed name above :)</SearchInfo>
                    </Wrapper>
                </Layout>
            ) : (
                <Layout flexCol>
                    <Wrapper> 
                        <GoBack btnContent="search" />
                        <SearchInfo>Search results for: <span>{searchTerm}</span></SearchInfo>
                    </Wrapper>
                </Layout>
            )}
            </>
    )
}

export default SearchResult 

const SearchInfo = styled.p`
    color: ${ props => props.theme.textSec};
    font-size: 20px;
    span {
        color: ${ props => props.theme.textPrim};
    }
`

// Masonry layout

const Masonry = styled.div`
  border-radius: 20px;
  width: 100%;
  height: auto;
`;

const Pattern = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 32%);
  grid-template-rows: repeat(3, auto);
  column-gap: 20px;
  row-gap: 20px;

  grid-template-areas:
    "one two three"
    "one four four"
    "five four four"
    "six seven eight"
    "nine nine eight"
    "nine nine ten";
  justify-content: space-evenly;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  min-height: 120px;
  border-radius: 20px;
  object-fit: cover;
  position: relative;
  z-index: 1;

  opacity: 1;
  -webkit-transition: all 0.4s ease;  
  -moz-transition: all 0.4s ease;  
  -o-transition: all 0.4s ease; 
  transition: all 0.4s ease;
`;

const Label = styled.div`
  display: none;
`;

const GridItem = styled.div`
  width: 100%;
  max-height: 100%;
  max-height: ${(props) => props.index === 0 && "300px"};
  max-height: ${(props) => props.index === 3 && "300px"};
  max-height: ${(props) => props.index === 7 && "300px"};
  max-height: ${(props) => props.index === 8 && "300px"};
  
  color: white;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  opacity: 1;
  -webkit-transition: all 0.3s ease;  
  -moz-transition: all 0.3s ease;  
  -o-transition: all 0.3s ease; 
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 134, 142, 0.6);
  }

  &:hover ${Label} {
    display: block;
    position: absolute;
    bottom: 10px;
    text-align: center;

    z-index: 100;
    padding: 10px 5px;
    margin-left: 10px;
    margin-right: 10px;

    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    width: 93%;

    justify-self: center;
    background-color: ${(props) => props.theme.bgBreed};
    color: #ff868e;
  }

  &:hover ${Img} {
    opacity: 0.3;
  }

  grid-area: ${(props) => props.index === 0 && "one"};
  grid-area: ${(props) => props.index === 1 && "two"};
  grid-area: ${(props) => props.index === 2 && "three"};
  grid-area: ${(props) => props.index === 3 && "four"};
  grid-area: ${(props) => props.index === 4 && "five"};
  grid-area: ${(props) => props.index === 5 && "six"};
  grid-area: ${(props) => props.index === 6 && "seven"};
  grid-area: ${(props) => props.index === 7 && "eight"};
  grid-area: ${(props) => props.index === 8 && "nine"};
  grid-area: ${(props) => props.index === 9 && "ten"};
`;
