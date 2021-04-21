import React, { useEffect, useState } from "react";
import {Link}  from "react-router-dom";
import styled from 'styled-components';

const Filter = ({viewBox, d, url, path}) => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (url === path) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [url, path]) 

    return (
        <Link  to={url} active={active}>
            <Icon active={active} >
                <svg viewBox={viewBox} active={active}  > 
                    <path d={d}></path>
                </svg>
            </Icon>
        </Link>
    )
}

export default Filter

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;
    margin-left: 10px;
    background: ${props => props.theme.bgBox};
    background-color: ${props => props.active && '#FF868E'};
    border-radius: 20px;

    transition: all 0.3s ease;

    &:hover{
        background: #FBE0DC;
        background-color: ${props => props.active && '#FF868E'};
    }


    svg {
        width: 30px;
        height: 30px;
        fill: #FF868E;
        fill: ${props => props.active && 'white'};

        &:hover{
            fill: ${props => props.active && 'white'};
        }
    }
`