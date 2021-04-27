import React, { useContext } from "react";
import { DogContext } from "../../helpers/DogContext";
import styled from "styled-components";
import Item from "../../components/Shared/DropdownItem";

const GallerySort = () => {
  const { breedsKey } = useContext(DogContext);
  const [breeds] = breedsKey;
  // const orderContent = ['Random', 'Desc', 'Asc']
  // const typeContent = ['All', 'Static', 'Animated']
  // const breedContent = [breeds]
  // const limitContent = ['5 items per page', '10 items per page', '15 items per page', '20 items per page']

  const orderContent = [ 
    { id: 1, name: "Random" },
    { id: 2, name: "Desc" },
    { id: 3, name: "Asc" },
  ];
  const typeContent = [
    { id: 1, name: "All" },
    { id: 2, name: "Static" },
    { id: 3, name: "Animated" },
  ];
  const breedContent = breeds;
  const limitContent = [
    { id: 1, name: "5 items per page" },
    { id: 2, name: "10 items per page" },
    { id: 3, name: "15 items per page" },
    { id: 4, name: "20 items per page" },
  ];

  // const orderContent = {{id: 1, name: 'Random'} 'Random', 2: 'Desc', 3: 'Asc'}
  // const typeContent = {1: 'All', 2: 'Static', 3: 'Animated'}
  // const breedContent = [...breeds]
  // const limitContent = {1: '5 items per page', 2: '10 items per page', 3: '15 items per page', 4: '20 items per page'}

  return (
    <Container>
      <Grid>
        <GridItem one>
          <Item label="order" title="Random" content={orderContent} />
        </GridItem>
        <GridItem two>
          <Item label="type" title="Static" content={typeContent} />
        </GridItem>
        <GridItem three>
          <Item label="breed" title="None" content={breedContent} />
        </GridItem>
        <GridItem four>
          <ItemFlex>
            <Item
              sm
              label="limit"
              title="5 items per page"
              content={limitContent}
            />
            <ResetBtn>
              <svg viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.48189 2.49989L7.93396 0.953004L8.88633 0L12.0577 3.16928L8.88634 6.33873L7.93395 5.38576L9.47232 3.84832C5.51244 3.99813 2.3473 7.25498 2.3473 11.2478C2.3473 15.3361 5.66547 18.6527 9.75744 18.6527C13.8494 18.6527 17.1676 15.3361 17.1676 11.2478V10.5742H18.5149V11.2478C18.5149 16.081 14.5927 20 9.75744 20C4.92221 20 1 16.081 1 11.2478C1 6.50682 4.77407 2.64542 9.48189 2.49989Z"
                ></path>
              </svg>
            </ResetBtn>
          </ItemFlex>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default GallerySort;

const Container = styled.section`
  background-color: ${ props => props.theme.bgSort};
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  column-gap: 10px;
  row-gap: 10px;

  grid-template-areas:
    "one two"
    "three four";
`;

const GridItem = styled.div`
  grid-area: ${(props) => props.one && "one"};
  grid-area: ${(props) => props.two && "two"};
  grid-area: ${(props) => props.three && "three"};
  grid-area: ${(props) => props.four && "four"};
`;

const ItemFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  `;

const ResetBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  min-width: 40px;
  background-color: ${(props) => props.theme.bgGaleryFilters};
  border-radius: 10px;
  margin: 5px 10px;

  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
    fill: #ff868e;
  }

  &:hover {
    background-color: #ff868e;
  }
  &:hover svg {
    fill: #ffffff;
  }
`;
