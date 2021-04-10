import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from "react-router-dom";



const NavItem = ({imgSrc, btnContent, btnUrl, green, yellow}) => {
    return (
        <Wrapper 
            imgSrc={imgSrc} 
            btnContent={btnContent} 
            btnUrl={btnUrl} 
            green={green}
            yellow={yellow}
        >
            <Div
            green={green}
            yellow={yellow}
            >
                <img src={imgSrc} alt=""/>
            </Div>
            <Link href="#">
                <A>{btnContent}</A>
            </Link>
        </Wrapper>
    )
}

export default NavItem

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


const Div = styled.div`
    background-color: #B4B7FF;
    background-color: ${props => props.green && '#97EAB9'};
    background-color: ${props => props.yellow && '#FFD280'};

    width: 139.24px;
    height: 198px;
    padding: 1.3rem 1rem;
    margin-bottom: 1.7rem;
    border-radius: 20px;
    border: 5px solid rgba(255, 255, 255, 0.6);
    transition: all 0.4s ease;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: 5px solid #FFFFFF;
    }
`

const A = styled.a`
    width: 100%;
    background: ${props => props.theme.bgBox};
    color: #FF868E;
    font-size: 16px;
    letter-spacing: 2px;
    padding: 0.5rem 2rem;
    text-transform: uppercase;
    border-radius: 10px;
    transition: all 0.4s ease;

    &:hover {
        background: #FBE0DC;
    }
`
