import React, { useState } from 'react';
import styled from 'styled-components'
import { Link, NavLink } from "react-router-dom";



const NavItem = ({imgSrc, btnContent, url, green, yellow, alt}) => {
    // const [state, setState] = useState(false);

    return (
        <Wrapper 
            imgSrc={imgSrc} 
            btnContent={btnContent} 
            url={url} 
            green={green}
            yellow={yellow}
            alt={alt}
        >
            <Div
            green={green}
            yellow={yellow}
            >
                <img src={imgSrc} alt={alt} />
            </Div>
            <Link to={url} >
                <A>{btnContent}</A>
            </Link>
            {/* <Link href="/voting">Link to votig</Link> */}
        </Wrapper>
    )
}

export default NavItem


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

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover ${A} {
        background: #FBE0DC;
    }

    &:hover ${Div} {
        border: 5px solid #FFFFFF;
    }

`
