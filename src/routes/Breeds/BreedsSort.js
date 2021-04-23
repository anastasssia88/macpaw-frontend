import React, { useContext } from 'react'
import { DogContext } from '../../helpers/DogContext'
import { BreedsContext } from '../../helpers/BreedsContext'

import styled from 'styled-components';

// import Dropdown from './Dropdown'

const BreedsSort = () => {
    // Shared state 
    const { breedsKey } = useContext(DogContext)
    const [ breeds ] = breedsKey

    // Breeds context
    const { currBreedKey, limitKey, orderKey, dogsKey, breedsOpenKey, limitOpenKey } = useContext( BreedsContext )
    const [ currBreed, setCurrBreed ] = currBreedKey
    const [ limit , setLimit ] = limitKey
    const [ order , setOrder ] = orderKey

    // Managing dropdowns
    const [breedsOpen, setBrOpen] = breedsOpenKey
    const [limitOpen, setLimitOpen] = limitOpenKey


    // Handling filters on click
    const toggleBreeds = () => {
        setBrOpen(!breedsOpen);
        setLimitOpen(false);
    }

    const toggleLimit = () => {
        setLimitOpen(!limitOpen);
        setBrOpen(false);
    }

    // Handling filters on mouce event
    const handleMouseOver = (filter) => {
        if (filter === 'breed') {
            setLimitOpen(false);
        } else {
            setBrOpen(false);
        }
    }

    const handleMouseLeave = () => {
        setBrOpen(false);
        setLimitOpen(false);
    }

    // Filtering by breeds name, limit, reset, order
    const filterByBreed = (breed) => {
        setCurrBreed({id: breed.id, name: breed.name});
        setBrOpen(false);
    } 

    const handleLimit = (num) => {
        setLimit(num)
        console.log(limit)
        setLimitOpen(false)
    }

    const reset = () => {
        setLimit(10)
        setCurrBreed({id: '', name: ''});
    }

    const changeOrder = (value) => {
        setOrder(value)
    }

    let label
    if (currBreed.name === '' || currBreed.name === undefined) {
        label = "All breeds"
    } else {
        label = currBreed.name
    }


    return (
        <Wrapper> 

            {/* All breeds */}
            <Main>
                <DropDownContainer lg verticalScroll onMouseOver={() => handleMouseOver('breed')} > 
                    <DropDownHeader onClick={toggleBreeds}>
                        <p>{label}</p>
                        <svg viewBox="0 0 12 12"> 
                                <path d="M6.59406 9.17405L11.7538 4.01423C12.0821 3.68603 12.0821 3.15383 11.7538 2.82575C11.4256 2.49767 10.8935 2.49767 10.5655 2.82575L5.99993 7.39142L1.43458 2.82593C1.10635 2.49779 0.574264 2.49779 0.24617 2.82593C-0.0820567 3.15401 -0.0820567 3.68615 0.24617 4.01435L5.40591 9.17418C5.57003 9.33824 5.78492 9.42017 5.9999 9.42017C6.21498 9.42017 6.43002 9.33807 6.59406 9.17405Z"></path>
                            </svg>
                    </DropDownHeader>
                    {breedsOpen && (
                        <DropDownListContainer>
                        <DropDownList md onMouseLeave={handleMouseLeave}>
                            <ListItem key="all breeds" onClick={() => reset()} > None</ListItem>
                            {
                                breeds.map( breed => <ListItem key={breed.id} onClick={() => filterByBreed(breed)} >{breed.name}</ListItem>)
                            }
                        </DropDownList>
                        </DropDownListContainer>
                    )}
                </DropDownContainer>
            </Main>

            {/* Limit */}
            <Main>
                <DropDownContainer md onMouseOver={() => handleMouseOver('limit')}>
                <DropDownHeader onClick={toggleLimit}>
                    <p>Limit: { limit }</p>
                    <svg viewBox="0 0 12 12"> 
                            <path d="M6.59406 9.17405L11.7538 4.01423C12.0821 3.68603 12.0821 3.15383 11.7538 2.82575C11.4256 2.49767 10.8935 2.49767 10.5655 2.82575L5.99993 7.39142L1.43458 2.82593C1.10635 2.49779 0.574264 2.49779 0.24617 2.82593C-0.0820567 3.15401 -0.0820567 3.68615 0.24617 4.01435L5.40591 9.17418C5.57003 9.33824 5.78492 9.42017 5.9999 9.42017C6.21498 9.42017 6.43002 9.33807 6.59406 9.17405Z"></path>
                        </svg>
                </DropDownHeader>
                {limitOpen && (
                    <DropDownListContainer>
                    <DropDownList md onMouseLeave={handleMouseLeave}>
                        <ListItem onClick={() => handleLimit(5)}>5 items per page</ListItem>
                        <ListItem onClick={() => handleLimit(10)}>10 items per page</ListItem>
                        <ListItem onClick={() => handleLimit(15)}>15 items per page</ListItem>
                        <ListItem onClick={() => handleLimit(20)}>20 items per page</ListItem>
                    </DropDownList>
                    </DropDownListContainer>
                )}
                </DropDownContainer>
            </Main> 

            
            

            {/* Sorting from Z to A */}
            <SortBtn sort onClick={ () => changeOrder('ASC') }>
                <svg viewBox="0 0 20 20"> 
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.195262C4.26035 -0.0650874 4.68246 -0.0650874 4.94281 0.195262L8.94281 4.19526L8 5.13807L5.13807 2.27614V20H3.80474V2.27614L0.942809 5.13807L0 4.19526L4 0.195262ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 1.98682e-08 15.1381 1.98682e-08C13.2971 1.98682e-08 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"></path>
                </svg>
            </SortBtn>

            {/* Sorting from A to Z */}
            <SortBtn sort onClick={ () => changeOrder('DESC') }>
                <svg viewBox="0 0 20 20"> 
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.80474 17.7239V0H5.13807V17.7239L8 14.8619L8.94281 15.8047L4.94281 19.8047C4.81778 19.9298 4.64822 20 4.4714 20C4.29459 20 4.12502 19.9298 4 19.8047L0 15.8047L0.942809 14.8619L3.80474 17.7239ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 0 15.1381 0C13.2971 0 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"></path>
                </svg>
            </SortBtn>
        </Wrapper>
    )
}

export default BreedsSort

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`

const SortBtn = styled.div`
    background-color: ${props => props.theme.bgSort};
    color: ${props => props.theme.textSec};
    min-height: 40px;
    min-width: 40px;
    /* width: ${props => props.w100 && '110px'};
    width: ${props => props.wMax && '100%'}; */
    padding: 0px 10px;
    margin-left: 10px;
    border-radius: 10px;
    border: 2px solid rgba(255, 134, 142, 0);

    display: flex;
    justify-content: space-between;
    align-content: center;

    &:hover {
        border: 2px solid #FBE0DC;
    }

    &:hover svg {
        fill: #FF868E;
    }

    p {
        align-self: center;
    }

    svg {
        width: 12px;
        height: 12px;
        fill: #8C8C8C;
        width: ${props => props.sort && '18px'};
        height: ${props => props.sort && '20px'};
        align-self: center;

    }
`


// Dropdowns

const Main = styled.div`
  height: auto;
  z-index: 99;
  transition: all 0.3s ease;
`

const DropDownContainer = styled.div`
  width: 100px;
  min-width: ${props => props.md && '120px'};
  min-width: ${props => props.lg && '200px'};
  max-width: ${props => props.md && '150px'};
  max-width: ${props => props.lg && '230px'};
`

const DropDownHeader = styled.div`
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
    /* color: #8C8C8C;
    background-color: ${props => props.theme.bgBox}; */
    background-color: ${props => props.theme.bgSort};
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