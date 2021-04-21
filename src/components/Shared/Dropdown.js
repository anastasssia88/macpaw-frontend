// Dropdowns
import styled from 'styled-components'

export const Main = styled.div`
  height: auto;
  z-index: 99;
  transition: all 0.3s ease;
`

export const DropDownContainer = styled.div`
  width: 100px;
  min-width: ${props => props.md && '120px'};
  min-width: ${props => props.lg && '200px'};
  max-width: ${props => props.md && '150px'};
  max-width: ${props => props.lg && '230px'};
`

export const DropDownHeader = styled.div`
    height: 40px;
    /* background-color: ${props => props.theme.bgSort}; */
    background-color: ${props => props => props.theme.bgGaleryFilters};
    
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
`

export const DropDownListContainer = styled.div``

export const DropDownList = styled.ul`
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
    background-color: ${props => props => props.theme.bgGaleryFilters};
    color: ${props => props.theme.textSec};
    
  &:first-child {
    padding-top: 0.8em;
  }
`

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1em;
  transition: all 0.3s ease;
  &:hover{
      color: #FF868E;
  }
`