import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DogContext } from "../../helpers/DogContext"

const NavItem = ({ imgSrc, btnContent, url, green, yellow, alt, path, isOpen, setIsOpen }) => {
  const [active, setActive] = useState(false);
  const { searchTermKey } = useContext(DogContext);
  const [searchTerm , setSearchTerm ] = searchTermKey;

  useEffect(() => {
    if (url === path) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [url, path]);

  return (
    <Wrapper
      imgSrc={imgSrc}
      btnContent={btnContent}
      url={url}
      green={green}
      yellow={yellow}
      alt={alt}
      active={active}
      onClick={() => setSearchTerm("Search for breeds by name")}
    >
      <Link to={url}>
        <Div green={green} yellow={yellow} active={active}>
          <img src={imgSrc} alt={alt} />
        </Div>
        <A active={active}>{btnContent}</A>
      </Link>
    </Wrapper>
  );
};

export default NavItem;

const Div = styled.div`
  background-color: #b4b7ff;
  background-color: ${(props) => props.green && "#97EAB9"};
  background-color: ${(props) => props.yellow && "#FFD280"};

  padding: 1.3rem 1rem;
  width: 138px;
  height: 198px;
  margin-bottom: 1rem;
  border-radius: 20px;
  border: 5px solid rgba(255, 255, 255, 0.6);
  border: ${(props) => props.active && "5px solid #FBE0DC"};
  -webkit-transition: all 0.3s ease;  
  -moz-transition: all 0.3s ease;  
  -o-transition: all 0.3s ease; 
  transition: all 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  } 

`;

const A = styled.div`
  width: 100%;
  max-height: 36px;
  background: ${(props) => props.theme.bgBox};
  background: ${(props) => props.active && "#FF868E"};
  color: #ff868e;
  color: ${(props) => props.active && "white"};
  font-size: 14px;
  letter-spacing: 2px;
  padding: 10px 0px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 10px;
  -webkit-transition: all 0.3s ease;  
  -moz-transition: all 0.3s ease;  
  -o-transition: all 0.3s ease; 
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.4rem;
  } 
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover ${A} {
    background: #fbe0dc;
    background: ${(props) => props.active && "#FF868E"};
  }

  &:hover ${Div} {
    border: 5px solid #ffffff;
    border: ${(props) => props.active && "5px solid #FBE0DC"};
  }

  a {
    @media (max-width: 768px) {
    width: 100%;
    } 
  }
`;
