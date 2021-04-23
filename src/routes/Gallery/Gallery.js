import React, { useEffect, useState, useContext } from 'react'
import { GalleryContext } from '../../helpers/GalleryContext'
import styled from 'styled-components';
import axios from 'axios'

import Search from '../../components/Searchbar/Search' 
import Layout from '../../components/Shared/Layout'
import GoBack from '../../components/Shared/GoBack'
import GallerySort from './GallerySort'


const Gallery = () => {
    const { dogsKey, chunkedKey } = useContext( GalleryContext )

    const [dogs, setDogs] = dogsKey    
    const [chunked, setChunked] = chunkedKey
    

    // Fetching dogs
    useEffect(() => { 
        const fetchData = async () => {
            const response = await axios('https://api.thedogapi.com/v1/images/search?limit=10');
            setDogs(response.data)
            };
        fetchData(dogs)
    }, []);


    // displaying the dogs
    useEffect(() => {
        if (dogs.length > 0) {
            const temporary = [...dogs];
            const result = []
            while (temporary.length > 0) {
                result.push(temporary.splice(0, 10))
            }
            setChunked(result)
        }
    }, [dogs]);

    return (
        <Layout flexCol> 
            <Search />
            <Wrapper>
                <Container>
                    <GoBack btnContent="Galery" /> 
                    <Upload>
                        <svg viewBox="0 0 16 16"> 
                            <path d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"></path>
                        </svg>
                        Upload
                    </Upload> 
                </Container>                

                <GallerySort /> 

                <Masonry>
                    {chunked.map(tenDogs => <Pattern>
                        {tenDogs.map((dog, index) =>
                            <GridItem key={dog.id} index={index} >
                                <Img src={dog.url} />
                                <Label>
                                    <svg viewBox="0 0 30 30"> 
                                        <path d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z"></path>
                                    </svg>
                                </Label>
                            </GridItem>)}
                    </Pattern>)
                    }
                </Masonry>
            </Wrapper>
        </Layout>
    )
}

export default Gallery

const Wrapper = styled.div`
    background: ${props => props.theme.bgBox};
    border-radius: 20px;
    width: 100%;
    height: 100%;
    padding: 20px;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Upload = styled.button`
    border-radius: 10px;
    border: none;
    height: 40px;
    background: #FBE0DC;
    color: #FF868E;
    min-width: 143px;
    text-transform: uppercase;
    letter-spacing: 2px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    transition: all 0.3s ease; 

    &:hover {
        background: #FF868E;
        color: #FFFFFF;
    }

    svg {
        fill: #FF868E;
        width: 16px;
        height: 16px; 
        margin-right: 0.5rem;
    }

    &:hover svg {
        fill: #FFFFFF;
    }
`

// Filters' container
const Flex = styled(Container)`
    padding: 10px;
    justify-content: space-evenly;
    align-items: center;

    background-color: #F8F8F7;
    border-radius: 20px;
    padding: 10px;
`

// Masonry layout
const Masonry = styled.div`
    background: ${props => props.theme.bgBox};
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
        top: 40%;
        left: 40%;
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


