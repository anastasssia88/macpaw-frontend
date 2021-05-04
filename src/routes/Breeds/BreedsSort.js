import React, { useContext } from "react";
import styled from "styled-components";
import { BreedsContext } from "../../helpers/BreedsContext";
import Item from "./DropdownItem";
import FilterItems from "../../helpers/FilterItemsBreeds";


const BreedsSort = () => {

  const {
    currBreedKey, 
    limitKey,
    orderKey,
    breedsKey
  } = useContext(BreedsContext);

  const [currBreed, setCurrBreed] = currBreedKey;
  const [ order ] = orderKey;
  const [ breeds ] = breedsKey;
  const { handleFilterClick, changeOrder } = FilterItems(); 


  let label;
  if (currBreed.name === "" || currBreed.name === undefined) {
    label = "All breeds";
  } else {
    label = currBreed.name;
  }

  // NEW LOGIC
  const limitContent = [
    { id: 1, name: "5 items per page", num: 5 },
    { id: 2, name: "10 items per page", num: 10 },
    { id: 3, name: "15 items per page", num: 15 },
    { id: 4, name: "20 items per page", num: 20 },
  ];
  const breedContent = breeds;

  return (
    <Wrapper>
      <Item
          ml
          align
          gray
          scrollOn
          title="All breeds"
          content={breedContent}
          gridArea="breed"
        />

        <Item
          ml
          xs
          align
          gray
          title="Limit: 10"
          content={limitContent}
        />

        <SortBtn sort onClick={() => changeOrder("ASC")} asc={order} >
          <svg viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 0.195262C4.26035 -0.0650874 4.68246 -0.0650874 4.94281 0.195262L8.94281 4.19526L8 5.13807L5.13807 2.27614V20H3.80474V2.27614L0.942809 5.13807L0 4.19526L4 0.195262ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 1.98682e-08 15.1381 1.98682e-08C13.2971 1.98682e-08 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
            ></path>
          </svg>
        </SortBtn>

        <SortBtn sort onClick={() => changeOrder("DESC")} desc={order}>
          <svg viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.80474 17.7239V0H5.13807V17.7239L8 14.8619L8.94281 15.8047L4.94281 19.8047C4.81778 19.9298 4.64822 20 4.4714 20C4.29459 20 4.12502 19.9298 4 19.8047L0 15.8047L0.942809 14.8619L3.80474 17.7239ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 0 15.1381 0C13.2971 0 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
            ></path>
          </svg>
        </SortBtn>
    </Wrapper>
  );
};

export default BreedsSort;

const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  @media (max-width: 768px) {
    height: auto;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-rows: 50px 50px;
    grid-template-areas: 
      "breed breed breed"
      "limit asc desc";
    margin-bottom: 20px;
  } 
`;

const SortBtn = styled.div`
  background-color: ${(props) => props.theme.bgSort};
  color: ${(props) => props.theme.textSec};
  min-height: 40px;
  min-width: 40px;
  padding: 0px 10px;
  margin-left: 10px;
  border-radius: 10px;
  border: ${ props => props.asc === "asc" ? "2px solid #fbe0dc" : "2px solid rgba(255, 134, 142, 0)"};
  border: ${ props => props.desc === "desc" && "2px solid #fbe0dc"};

  display: flex;
  justify-content: space-between;
  align-content: center;

  &:hover {
    border: 2px solid #fbe0dc;
  }

  &:hover svg {
    fill: #ff868e;
  }

  p {
    align-self: center;
  }

  svg {
    width: 12px;
    height: 12px;
    fill: #8c8c8c;
    width: ${(props) => props.sort && "18px"};
    height: ${(props) => props.sort && "20px"};
    fill: ${ props => props.asc === "asc" && "#ff868e"};
    fill: ${ props => props.desc === "desc" && "#ff868e"};
    align-self: center;
  }
`;


