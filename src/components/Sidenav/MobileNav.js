import React from 'react'
import styled from "styled-components"
import NavItem from "./NavItem";
import CloseButton from "../Shared/CloseButton"

import votingImg from "../../images/vote-table.svg";
import breedsImg from "../../images/pet-breeds.svg";
import galleryImg from "../../images/images-search.svg";


const MobileNav = ({ isOpen, setIsOpen, path }) => {
    return (
    <NavWrapper path={path} isOpen={isOpen}>
      <CloseButton setIsOpen={setIsOpen} isOpen={isOpen}/>
      <Nav >
        <NavItem 
          btnContent="Voting"
          imgSrc={votingImg}
          url="/voting"
          alt="voting"
          path={path}
        />
        <NavItem
          btnContent="Breeds"
          imgSrc={breedsImg}
          green
          url="/breeds"
          alt="breeds"
          path={path}
        />
        <NavItem
          btnContent="Gallery"
          imgSrc={galleryImg}
          yellow
          url="/gallery"
          alt="gallery"
          path={path}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Nav>
    </NavWrapper>
    )
}

export default MobileNav

const NavWrapper = styled.nav`
  display: none;
  @media (max-width: 768px) {
    padding: 20px;
    display: ${ props => props.isOpen && "flex" };
    display: ${ props => props.path === "/" && "none" };
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    background: ${(props) => props.theme.bgMain};
    height: 100vh;
  }
`

const Nav = styled.nav`
  margin: 1.5rem 0rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;