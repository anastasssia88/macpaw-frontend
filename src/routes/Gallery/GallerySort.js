import React, { useState, useContext } from 'react'
import { DogContext } from '../../helpers/DogContext'
import styled from 'styled-components';
import axios from 'axios'
import Item from '../../components/Shared/DropdownItem'
import Filter from '../../components/Searchbar/Filter'

const GallerySort = () => {
    // LOGIC

    return (
        <Container>
            <Grid>
                <GridItem one >
                    <Item label="order" title="Random" />
                </GridItem>
                <GridItem two >
                    <Item label="type" title="Static" /> 
                </GridItem>
                <GridItem three >
                    <Item label="breed" title="None" /> 
                </GridItem>
                <GridItem four >
                    <ItemFlex>
                        <Item sm label="limit" title="5 items per page" /> 
                        <ResetBtn> 
                            <svg viewBox="0 0 20 20"> 
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.48189 2.49989L7.93396 0.953004L8.88633 0L12.0577 3.16928L8.88634 6.33873L7.93395 5.38576L9.47232 3.84832C5.51244 3.99813 2.3473 7.25498 2.3473 11.2478C2.3473 15.3361 5.66547 18.6527 9.75744 18.6527C13.8494 18.6527 17.1676 15.3361 17.1676 11.2478V10.5742H18.5149V11.2478C18.5149 16.081 14.5927 20 9.75744 20C4.92221 20 1 16.081 1 11.2478C1 6.50682 4.77407 2.64542 9.48189 2.49989Z" ></path>
                            </svg>
                        </ResetBtn>       
                    </ItemFlex>
                </GridItem>
            </Grid>
        </Container>
    )
}

export default GallerySort

const Container = styled.section`
    background-color: #F8F8F7;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 10px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto; 

    column-gap: 20px;
    row-gap: 10px;

    grid-template-areas: 
        "one two"
        "three four";

`

const GridItem = styled.div`
    grid-area: ${props => props.one && 'one'};
    grid-area: ${props => props.two && 'two'};
    grid-area: ${props => props.three && 'three'};
    grid-area: ${props => props.four && 'four'};
`


const ItemFlex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #F8F8F7;
`

const ResetBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    min-width: 40px;
    background-color: ${props => props.theme.bgGaleryFilters};
    border-radius: 10px;
    margin: 5px 10px;

    transition: all 0.3s ease;

    svg {
        width: 20px;
        height: 20px;
        fill: #FF868E;
    }

    &:hover  {
        background-color: #FF868E;
    }
    &:hover svg {
        fill: #FFFFFF;
    }
`
