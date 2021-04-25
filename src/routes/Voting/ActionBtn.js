import React from 'react'
import styled from 'styled-components';

const ActionBtn = ({ like, fav, disl, viewBox, path, onClick }) => { 
    return (
        <Btn like={like} fav={fav} disl={disl} onClick={onClick} >
            <SVG like viewBox={viewBox} > 
                <path d={path}></path>
            </SVG >
        </Btn>             
    )
}

export default ActionBtn


const SVG = styled.svg`
        width: 30px;
        height: 30px;
        fill: white;
        transition: all 0.3s ease;
`

const Btn = styled.button`
width: 80px;
height: 80px;
border: none;
margin: ${props => props.fav && "0px 3px" };

background: ${ props => props.like && "#97EAB9" };
background: ${ props => props.fav && "#FF868E" };
background: ${ props => props.disl && "#FFD280" };

border-top-left-radius: ${ props => props.like && "20px" };
border-bottom-left-radius:  ${ props => props.like && "20px" };
border-top-right-radius: ${ props => props.disl && "20px" };
border-bottom-right-radius:  ${ props => props.disl && "20px" };

border-radius: ${ props => props.disl && "#97EAB9" };

transition: all 0.3s ease;

&:hover{
    background: ${ props => props.like && "rgba(151, 234, 185, 0.3)" };
    background: ${ props => props.fav && "rgba(255, 134, 142, 0.3)" };
    background: ${ props => props.disl && "rgba(255, 210, 128, 0.3)" };
}

&:hover ${SVG} {
    fill: ${props => props.like && "#97EAB9"};
    fill: ${props => props.fav && "#FF868E"};
    fill: ${props => props.disl && "#FFD280"};
}
`
