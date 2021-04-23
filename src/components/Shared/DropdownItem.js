import React, { useState } from 'react'
import styled from 'styled-components';


const DropdownItem = ({label, title, sm, content }) => {
    const [ isOpen, setIsOpen ] = useState(false)
    // const [ typeOpen, setTypeOpen ] = useState(false)
    // const [ breedOpen, setBreedOpen ] = useState(false)
    // const [ limitOpen, setLimitOpen ] = useState(false)

    // Opening filters
    const openFilter = () => {
        setIsOpen(!isOpen)
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    const handleMouseOver = () => {
        setIsOpen(false);
    }

    let firstChild
    if (label === 'breed') {
        firstChild = <ListItem>None</ListItem>
    }

    return (
                <Main sm={sm}>
                    <DropDownContainer md onClick={ openFilter } onMouseIn={ handleMouseOver }>
                        <span>{label}</span>
                        <DropDownHeader onMouseOver={ handleMouseOver }> 
                            <p>{title}</p>
                            <svg viewBox="0 0 12 12"> 
                                <path d="M6.59406 9.17405L11.7538 4.01423C12.0821 3.68603 12.0821 3.15383 11.7538 2.82575C11.4256 2.49767 10.8935 2.49767 10.5655 2.82575L5.99993 7.39142L1.43458 2.82593C1.10635 2.49779 0.574264 2.49779 0.24617 2.82593C-0.0820567 3.15401 -0.0820567 3.68615 0.24617 4.01435L5.40591 9.17418C5.57003 9.33824 5.78492 9.42017 5.9999 9.42017C6.21498 9.42017 6.43002 9.33807 6.59406 9.17405Z"></path>
                            </svg>
                        </DropDownHeader>
                        {isOpen && (
                            <DropDownListContainer>
                            <DropDownList md onMouseLeave={handleMouseLeave} >
                                {firstChild}
                                {   
                                    content.map( item => <ListItem key={item.id} >{item.name}</ListItem>)
                                }
                            </DropDownList>
                            </DropDownListContainer>
                        )}
                    </DropDownContainer>
                </Main>
    )
}

export default DropdownItem

const Main = styled.div`
    /* z-index: 99; */
    transition: all 0.3s ease;
    max-width: 100%;
    width: ${props => props.sm && "100%"};
    margin: 5px 10px;
`

const DropDownContainer = styled.div`
  /* min-width: ${props => props.md && '120px'};
  min-width: ${props => props.lg && '200px'};
  max-width: ${props => props.md && '150px'};
  max-width: ${props => props.lg && '230px'}; */

  min-width: 100%;
  /* width: 100px; */

  span {
      color: #8C8C8C;
      font-size: 10px;
      text-transform: uppercase;
      margin-left: 10px;
      line-height: 2;
  }
`

const DropDownHeader = styled.div`
    height: 40px;
    background-color: ${props => props.theme.bgGaleryFilters};
    color: ${props => props.theme.textPrim};
    margin-left: 0px;
    color: ${props => props.theme.textPrim};


    padding: 0px 10px;
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
`

const DropDownListContainer = styled.div`
    position: relative;
    z-index: 99;
  `

const DropDownList = styled.ul`
    margin-top: 10px;
    padding: 1px 20px;
    max-height: 20rem;
    overflow-y: scroll;
    border-radius: 10px;
    font-size: 16px;
    box-sizing: border-box;
    cursor: pointer;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.02);

    position: absolute;
    min-width: 100%;
    background-color: ${props => props.theme.bgGaleryFilters};
    color: ${props => props.theme.textSec};

    
  &:first-child {
    padding-top: 0.8em;
  }
`

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1em;
  transition: all 0.3s ease;
  &:hover{
      color: #FF868E;
  }
`