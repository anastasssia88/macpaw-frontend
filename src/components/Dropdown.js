import React, { useState } from 'react'
import styled from 'styled-components';


const Dropdown = ({md, lg, header}) => { 
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
  
    return (
      <Main>
        <DropDownContainer md={md} lg={lg} header={header}>
          <DropDownHeader onClick={toggling}>
              <p>{header}</p>
              <svg viewBox="0 0 12 12"> 
                    <path d="M6.59406 9.17405L11.7538 4.01423C12.0821 3.68603 12.0821 3.15383 11.7538 2.82575C11.4256 2.49767 10.8935 2.49767 10.5655 2.82575L5.99993 7.39142L1.43458 2.82593C1.10635 2.49779 0.574264 2.49779 0.24617 2.82593C-0.0820567 3.15401 -0.0820567 3.68615 0.24617 4.01435L5.40591 9.17418C5.57003 9.33824 5.78492 9.42017 5.9999 9.42017C6.21498 9.42017 6.43002 9.33807 6.59406 9.17405Z"></path>
                </svg>
            </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList md={md} lg={lg} >
                <ListItem>Affenpinscher</ListItem>
                <ListItem>Afghan Hound</ListItem>
                <ListItem>African Hunting Dog</ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>
    );
}

export default Dropdown


const Main = styled("div")`
  height: auto;
  z-index: 99;
  transition: all 0.3s ease;
`;

const DropDownContainer = styled("div")`
  width: 100px;
  min-width: ${props => props.md && '110px'};
  min-width: ${props => props.lg && '200px'};
`;

const DropDownHeader = styled("div")`
    height: 40px;
    background-color: ${props => props.theme.bgSort};
    color: ${props => props.theme.textSec};
    padding: 0px 10px;
    margin-left: 10px;
    border-radius: 10px;
    border: 2px solid rgba(255, 134, 142, 0);
    cursor: pointer;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    svg {
        fill: #8C8C8C;
        width: 12px;
        height: 12px;
    }

    &:hover {
        border: 2px solid #FBE0DC;
    }
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
    position: fixed; 
    margin-top: 10px;
    padding: 20px;
    width: ${props => props.md && '210px'};
    width: ${props => props.lg && '290px'};
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;

    font-size: 16px;
    color: #8C8C8C;
    background-color: ${props => props.theme.bgBox};
    
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 1em;
  transition: all 0.3s ease;
  &:hover{
      color: #FF868E;
  }
`;
