import React, { useEffect, useContext } from 'react'
import { DogContext } from '../../helpers/DogContext'
import { BreedsContext } from '../../helpers/BreedsContext'

import styled from 'styled-components';
import axios from 'axios'

import Search from '../../components/Searchbar/Search' 
import Layout from '../../components/Shared/Layout'
import GoBack from '../../components/Shared/GoBack'
import BreedsSort from './BreedsSort'


const Breeds = () => {
    // const { breedsKey } = useContext( DogContext )

    const { chunkedKey, currBreedKey, limitKey, orderKey, dogsKey } = useContext( BreedsContext )
    const [chunked, setChunked] = chunkedKey
    const [ currBreed ] = currBreedKey
    const [ limit ] = limitKey
    // const [ order , setOrder ] = orderKey
    const [dogs, setDogs] = dogsKey    


    useEffect(() => {
        const breedID = currBreed.id
        const fetchData = async () => {
            const response = await axios(`https://api.thedogapi.com/v1/images/search?limit=${limit}&breed_id=${breedID ? breedID : ''}`);
            setDogs(response.data)
            };
        fetchData(dogs)
    }, [limit, currBreed]);
    
     
    // displaying the dogs
    useEffect(() => {
        if (dogs.length > 0) {
            const filteredDogs = dogs.filter( dog => dog.breeds.length > 0)
            const temporary = [...filteredDogs];
            console.log(temporary)
            const result = []
            while (temporary.length > 0) {
                result.push(temporary.splice(0, 10))
                // debugger
            }
            setChunked(result) 
        }
    }, [dogs]);

    return (
        <Layout flexCol>
                <Search />
                <Wrapper>
                    <span>
                        <GoBack btnContent="Breeds" /> 
                        <BreedsSort />
                    </span>
                    <Masonry>
                        {chunked.map((tenDogs, index) => 
                            <Pattern key={index}>
                                {tenDogs.map((dog, index) => 
                                    <GridItem key={dog.id} index={index} >
                                        <Img src={dog.url} />
                                        <Label>{dog.breeds[0].name}</Label>
                                    </GridItem>
                                    )}
                            </Pattern>
                        )}
                    </Masonry>
                </Wrapper>
        </Layout> 
    )
}

export default Breeds

const Wrapper = styled.div`
    background: ${props => props.theme.bgBox};
    border-radius: 20px;
    width: 100%;
    height: 100%;
    padding: 20px;

    span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
`

// Masonry layout

const Masonry = styled.div`
    border-radius: 20px;
    width: 100%;
    height: auto;
`

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
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    min-height: 120px;
    height: ${props => props.index === 0 && '280px'};
    border-radius: 20px;
    object-fit: cover;
    position: relative;
    z-index: 1;
    
    opacity: 1;
    transition: all 0.4s ease;
`

const Label = styled.div`
    display: none;
`

const GridItem = styled.div`  
    width: 100%; 
    height: 100%;
    color: white;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    opacity: 1;
    transition: all 0.3s ease;
    
    &:hover{
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
        background-color: ${props => props.theme.bgBreed};
        color: #FF868E;
    }

    &:hover ${Img}{
        opacity: 0.3;
    }

    grid-area: ${props => props.index === 0 && 'one'};
    grid-area: ${props => props.index === 1 && 'two'};
    grid-area: ${props => props.index === 2 && 'three'};
    grid-area: ${props => props.index === 3 && 'four'};
    grid-area: ${props => props.index === 4 && 'five'};
    grid-area: ${props => props.index === 5 && 'six'};
    grid-area: ${props => props.index === 6 && 'seven'};
    grid-area: ${props => props.index === 7 && 'eight'};
    grid-area: ${props => props.index === 8 && 'nine'};
    grid-area: ${props => props.index === 9 && 'ten'};
`

