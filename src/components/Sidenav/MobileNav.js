import React from 'react'
import styled from "styled-components"
import NavItem from "./NavItem";
import CloseButton from "../Shared/CloseButton"
import ModeToggle from "../Sidenav/ModeToggle"

import votingImg from "../../images/vote-table.svg";
import breedsImg from "../../images/pet-breeds.svg";
import galleryImg from "../../images/images-search.svg";


const MobileNav = ({ isOpen, setIsOpen, theme, setTheme, path }) => { 
    return (
    <NavWrapper path={path} isOpen={isOpen}>
      <span>
        <ModeToggle theme={theme} setTheme={setTheme}/>
        <CloseButton setIsOpen={setIsOpen} isOpen={isOpen}/>
      </span>
      <Nav >
        <NavItem 
          btnContent="Voting"
          imgSrc={votingImg}
          url="/voting"
          alt="voting"
          path={path}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <NavItem
          btnContent="Breeds"
          imgSrc={breedsImg}
          green
          url="/breeds"
          alt="breeds"
          path={path}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
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
    align-items: space-between;
    background: ${(props) => props.theme.bgMain};
    height: 100vh;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
    margin-bottom: 20px;
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