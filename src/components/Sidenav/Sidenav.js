import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import votingImg from "../../images/vote-table.svg";
import breedsImg from "../../images/pet-breeds.svg";
import galleryImg from "../../images/images-search.svg";
import NavItem from "./NavItem";
import ModeToggle from "./ModeToggle";
import NavLogo from './Logo'

const Sidenav = ({ theme , setTheme }) => {
  let location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);



  return (
    <Section> 
      <div>
        <Wrapper>
          <Flex>
            <NavLogo theme={theme} />
            <ModeToggle theme={theme} setTheme={setTheme} />
          </Flex>
          <div>
            <h1>Hi MacPaw!</h1>
            <p>Welcome to MSI 2021 Front-end test completed by Anastasia</p>
            <h3>Lets start using The Dogs API</h3>
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
  );
};

export default Sidenav;


const Section = styled.section`
  background: ${(props) => props.theme.bgMain};
  min-height: 100vh;
  height: auto;
  width: 50%;
`;

const Wrapper = styled.div`
  width: 455px;
  margin: 2rem 8rem;
  position: fixed;
  background: ${(props) => props.theme.bgMain};
 
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
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
