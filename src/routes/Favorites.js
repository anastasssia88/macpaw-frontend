import React, { useEffect, useContext, useState } from 'react'
import {DogContext} from '../helpers/DogContext'

import styled from 'styled-components';
import Layout from '../components/Shared/Layout'
import Search from '../components/Searchbar/Search' 
import GoBack from '../components/Shared/GoBack'
import NoItemFound from '../components/Shared/NoItemFound' 


const Favorites = () => {
    const { favKey, chunkedKey } = useContext( DogContext )
    const [ favorites, addToFav ] = favKey 
    const [chunked, setChunked] = useState([])  

    useEffect(() => {
        if (favorites.length > 0) {
            const temporary = [...favorites];
            const result = []
            while (temporary.length > 0) {
                result.push(temporary.splice(0, 10))
                // debugger
            }
            setChunked(result)
        }
    }, [favorites]);


    // if there is no favorite items
    let message
    if ( favorites.length === 0 ) {
        message = <NoItemFound />
    }  

    const romoveFromFavorites = (index) => {
        console.log(index)
        // let newFav = favorites.filter( item => favorites.indexOf(item) !== index)
        // addToFav(newFav)
        let newFav = [...favorites]
        newFav.splice(index, index);
        addToFav(newFav)
    }

    return (
        <Layout flexCol>
            <Search />
            <Wrapper>
                <GoBack btnContent="Favorites" />
                {message}
                {chunked.map((tenDogs, index) => <Pattern key={index}>
                    {tenDogs.map((dog, index) =>
                        <GridItem key={dog.id} index={index} >
                            <Img src={dog.url} />
                            <Label onClick={() => romoveFromFavorites(index)} >
                                    <svg viewBox="0 0 30 30"> 
                                        <path d="M8.07107 2C3.61354 2 0 5.61354 0 10.0711C0 12.2116 0.850339 14.2646 2.36396 15.7782L14.2929 27.7071C14.6834 28.0976 15.3166 28.0976 15.7071 27.7071L27.636 15.7782C29.1497 14.2646 30 12.2116 30 10.0711C30 5.61354 26.3865 2 21.9289 2C19.7884 2 17.7354 2.85034 16.2218 4.36396L15 5.58579L13.7782 4.36396C12.2646 2.85034 10.2116 2 8.07107 2Z"></path>
                                    </svg>
                                </Label>
                        </GridItem>)}
                </Pattern>)
                }
            </Wrapper>
        </Layout>
    )
}

export default Favorites

const Wrapper = styled.div`
    background: ${props => props.theme.bgBox};
    border-radius: 20px;
    width: 100%;
    height: 100%;
    padding: 20px;
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

    svg {
        width: 20px;
        height: 20px;
        fill: #FF868E;
    }
`

const GridItem = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    border-radius: 20px;
    position: relative;

    &:hover{
        background-color: rgba(255, 134, 142, 0.6);
    }

    &:hover ${Label} {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        z-index: 100;
        padding: 10px 5px;
        border-radius: 10px;
    
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

