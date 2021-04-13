import React, { useEffect, useState} from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";



const NavItem = ({imgSrc, btnContent, url, green, yellow, alt, path}) => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (url === path) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [url, path])

    return ( 
        <Wrapper 
            imgSrc={imgSrc} 
            btnContent={btnContent} 
            url={url} 
            green={green}
            yellow={yellow}
            alt={alt}
            active={active}
            >
                
            <Link to={url} >
                <Div green={green} yellow={yellow} active={active} >
                    <img src={imgSrc} alt={alt} />
                </Div>
                <A active={active}>{btnContent}</A>
            </Link>
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
    border: ${props => props.active && '5px solid #FBE0DC'};
    transition: all 0.3s ease;

    display: flex;
    justify-content: center;
    align-items: center;
`

const A = styled.span`
    width: 100%;
    background: ${props => props.theme.bgBox};
    background-color: ${props => props.active && '#FF868E'};

    color: #FF868E;
    color: ${props => props.active && 'white'};
    font-size: 16px;
    letter-spacing: 2px;
    padding: 0.5rem 2rem;
    text-transform: uppercase;
    border-radius: 10px;
    transition: all 0.3s ease;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover ${A} {
        background: #FBE0DC;
        background: ${props => props.active && '#FF868E'};
    }

    &:hover ${Div} {
        border: 5px solid #FFFFFF;
        border: ${props => props.active && '5px solid #FBE0DC'};
    }
`
