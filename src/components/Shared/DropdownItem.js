import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios'



const DropdownItem = ({label, title, sm }) => {
    // LOGIC
    const [ orderOpen, setOrderOpen ] = useState(false)

    // Opening filters
    const openFilter = (filter) => {
        if (filter === 'order') {
            setOrderOpen(!orderOpen)
        }
    }

    return (
                <Main sm={sm}>
                    <DropDownContainer md onClick={ () => openFilter('order')}>
                        <span>{label}</span>
                        <DropDownHeader > 
                            <p>{title}</p>
                            <svg viewBox="0 0 12 12"> 
                                    <path d="M6.59406 9.17405L11.7538 4.01423C12.0821 3.68603 12.0821 3.15383 11.7538 2.82575C11.4256 2.49767 10.8935 2.49767 10.5655 2.82575L5.99993 7.39142L1.43458 2.82593C1.10635 2.49779 0.574264 2.49779 0.24617 2.82593C-0.0820567 3.15401 -0.0820567 3.68615 0.24617 4.01435L5.40591 9.17418C5.57003 9.33824 5.78492 9.42017 5.9999 9.42017C6.21498 9.42017 6.43002 9.33807 6.59406 9.17405Z"></path>
                                </svg>
                        </DropDownHeader>
                        {orderOpen && (
                            <DropDownListContainer>
                            <DropDownList md >
                                <ListItem > Random</ListItem>
                                <ListItem > Desc</ListItem>
                                <ListItem > Asc</ListItem>
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

    /* margin-left: 10px;
    color: ${props => props.theme.textSec}; */
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

const DropDownListContainer = styled.div``

const DropDownList = styled.ul`
    position: fixed;
    margin-top: 10px;
    margin-left: 10px;
    padding: 1px 20px;
    width: auto;
    max-height: 20rem;
    overflow-y: scroll;
    /* width: ${props => props.md && '200px'};
    width: ${props => props.lg && '260px'}; */
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;

    font-size: 16px;
    /* background-color: ${props => props.theme.bgSort}; */
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