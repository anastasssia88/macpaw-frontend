import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import votingImg from "../../images/vote-table.svg";
import breedsImg from "../../images/pet-breeds.svg";
import galleryImg from "../../images/images-search.svg";
import NavItem from "./NavItem";
import ModeToggle from "./ModeToggle";
import NavLogo from "./Logo";
import MobileNav from "./MobileNav";

const Sidenav = ({ theme, setTheme, isOpen, setIsOpen }) => {
  let location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Section path={path}>
        <div>
          <Wrapper>
            <Flex>
              <NavLogo theme={theme} />
              <ModeToggle theme={theme} setTheme={setTheme} />
            </Flex>
            <div>
              <h1>Hi, dog lover!</h1>
              <p>
                Welcome to PetsPaw breed explorer application
              </p>
              <h3>Let's start exploring breeds</h3>
              <Nav>
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
                />
              </Nav>
            </div>
          </Wrapper>
        </div>
      </Section>
      <MobileNav
        path={path}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        theme={theme}
        setTheme={setTheme}
      />
    </>
  );
};

export default Sidenav;

const Section = styled.section`
  background: ${(props) => props.theme.bgMain};
  min-height: 100vh;
  max-height: auto;
  width: 50%;

  @media (max-width: 1024px) {
    width: auto;
    height: 100vh;
    display: ${(props) => (props.path === "/" ? "block" : "none")};
  }
`;

const Wrapper = styled.div`
  width: 455px;
  margin: 2rem 8rem;
  position: fixed;
  background: ${(props) => props.theme.bgMain};

  @media (max-width: 1024px) {
    position: static;
    width: auto;
    margin: 1.8rem 7rem;
  }

  @media (max-width: 767px) {
    position: static;
    width: auto;
    margin: 25px;
  }

  h1 {
    margin-top: 5rem;
    color: ${(props) => props.theme.textPrim};
  }

  p {
    padding: 1.5rem 0rem;
    color: ${(props) => props.theme.textSec};
  }

  h3 {
    margin-top: 3.5rem;
    color: ${(props) => props.theme.textPrim};
  }
`;

const Nav = styled.nav`
  margin: 1.5rem 0rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
