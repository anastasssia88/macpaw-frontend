import React from 'react'
import styled from 'styled-components'
// import { Link, NavLink } from "react-router-dom";
import votingImg from '../images/vote-table.svg'
import breedsImg from '../images/pet-breeds.svg'
import galleryImg from '../images/images-search.svg'
import NavItem from './NavItem'

const Navbar = () => {
    return (
        <Wrapper>
            <NavItem btnContent="Voting" imgSrc={votingImg} url="/voting" alt="voting" />
            <NavItem btnContent="Breeds" imgSrc={breedsImg} green url="/breeds" alt="breeds" />
            <NavItem btnContent="Gallery" imgSrc={galleryImg} yellow url="/breeds" alt="gallery" />
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.nav`
    margin: 1.5rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

