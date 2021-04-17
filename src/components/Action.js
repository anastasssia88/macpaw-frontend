import React from 'react'
import styled from 'styled-components';

const Action = ({content, viewBox, d, fav, dis, time}) => {
    return (
        <Wrapper>
            <div>
            <Time>{time}</Time>
            <p>Image ID: <span>fQSunHvl8</span> {content}</p>
            </div>
            <SVG fav={fav} dis={dis} viewBox={viewBox}> 
                <path d={d}></path>
            </SVG>
        </Wrapper>
    )
}

export default Action

const Wrapper = styled.div`
    background-color: ${props => props.theme.bgMain};
    width: 100%;
    height: 60px;
    border-radius: 10px;
    padding: 0px 20px;
    margin: 10px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        p {
        color: ${props => props.theme.textSec};

        span {
            color: ${props => props.theme.textPrim};
            font-weight: 500;
        }
    }
    }
`

const Time = styled.span`
    background-color: white;
    width: auto;
    height: 30px;
    border-radius: 5px;
    padding: 0px 10px;
    margin-right: 25px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const SVG = styled.svg`
    fill: #97EAB9;
    fill: ${props => props.fav && '#FF868E'};
    fill: ${props => props.dis && '#FFD280'};

    justify-self: flex-end;
    width: 20px;
    height: auto;
`