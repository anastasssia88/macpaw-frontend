import React, { useState, useContext } from 'react'
import {DogContext} from '../../src/DogContext'

import styled from 'styled-components';
import Layout from '../layout/Layout'
import Search from '../layout/Search' 
import GoBack from '../components/GoBack'
import NoItemFound from '../components/NoItemFound'

const Liked = () => {
    // Shared State
    const { likeKey } = useContext( DogContext )
    const [ liked ] = likeKey

    let message
    if ( liked.length === 0 ) {
        message = <NoItemFound />
    } 

    return (
        <Layout flexCol>
            <Search />
            <Wrapper>
                <GoBack btnContent="Liked" />
                {message}
                <Pattern>
                    {liked.map(dog => 
                        <GridItem >
                            <Img src={dog.url} width="300px" />
                        </GridItem>)}
                </Pattern>

            </Wrapper>
        </Layout> 
    ) 
}

export default Liked

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
        "five four four";
    justify-content: space-evenly;
`

const GridItem = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    border-radius: 20px;
    grid-area: ${props => props.one === 'one' && 'one'};
 

    grid-area: ${props => props.one && 'one'};
    grid-area: ${props => props.two && 'two'};
    grid-area: ${props => props.three && 'three'};
    grid-area: ${props => props.four && 'four'};
    grid-area: ${props => props.five && 'five'};
`

const Img = styled.img`
    width: 100%;
    height: 140px;
    /* height: ${props => props.sm && '140px'}; */
    height: ${props => props.lg && '300px'};
    border-radius: 20px;
`


const Message = styled.div`
    background-color: ${props => props.theme.bgMain};
    width: 100%;
    height: 60px;
    border-radius: 10px;
    padding: 0px 20px;
    margin: 10px 0px;

    display: ${props => props.displayNone ? 'none' : 'flex' };
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;


    p {
        color: ${props => props.theme.textSec};
        padding: 0px 10px; 
    }
`