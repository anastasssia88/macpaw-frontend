import React from 'react'
import styled from 'styled-components';
import dog from '../images/dog-voting.png'
 
const Grid = () => {
    return (
        <>
            <PatternOne>
                <GridItem one>
                    <Img src={dog} alr="dog" lg />
                </GridItem>
                <GridItem two>
                    <Img src={dog} alr="dog" />
                </GridItem>
                <GridItem three>
                    <Img src={dog} alr="dog" />
                </GridItem>
                <GridItem four>
                    <Img src={dog} alr="dog" lg />
                </GridItem>
                <GridItem five>
                    <Img src={dog} alr="dog" />
                </GridItem>
            </PatternOne>

            <PatternTwo>
                <GridItem one>
                    <Img src={dog} alr="dog"  />
                </GridItem>
                <GridItem two>
                    <Img src={dog} alr="dog"/>
                </GridItem>
                <GridItem three>
                    <Img src={dog} alr="dog" lg/>
                </GridItem>
                <GridItem four>
                    <Img src={dog} alr="dog" lg/>
                </GridItem>
                <GridItem five>
                    <Img src={dog} alr="dog" />
                </GridItem>
            </PatternTwo>
        </>
    )
}

export default Grid


const PatternOne = styled.div`
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

const PatternTwo = styled(PatternOne)`
    grid-template-areas: 
        "one two three"
        "four four three"
        "four four five";
`

const GridItem = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    border-radius: 20px;

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