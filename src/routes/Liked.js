import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DogContext } from "../helpers/DogContext";
import Select from "../helpers/Select";

import styled from "styled-components";
import Wrapper from "../components/Shared/Wrapper";
import GoBack from "../components/Shared/GoBack";
import NoItemFound from "../components/Shared/NoItemFound";

import {
  Pattern, Img, GridItemWithName, Label
} from "../components/Shared/Masonry" 

const Liked = () => {
  const { likeKey } = useContext(DogContext);
  const [liked] = likeKey;
  const [chunked, setChunked] = useState([]);
  const { handleSelectedClick } = Select();


  useEffect(() => {
    if (liked.length > 0) {
      const temporary = [...liked];
      const result = [];
      while (temporary.length > 0) {
        result.push(temporary.splice(0, 10));
      }
      setChunked(result);
    }
  }, [liked]);

  // if there is no items liked
  let message;
  if (chunked.length === 0) {
    message = <NoItemFound />;
  }

  return (
      <Wrapper>
        <GoBack btnContent="Liked" />
        {message}
        {chunked.map((tenDogs, index) => (
          <Pattern key={index}>
            {tenDogs.map((dog, index) => (
              <GridItemWithName key={dog.id} index={index}>
                <Img src={dog.url} />
                { dog.breeds.length > 0 ? (
                    <Label><StyledLink to="/breeds/selected" onClick={() => handleSelectedClick(dog)}>{dog.breeds[0].name}</StyledLink></Label>
                  ) : (
                    <Label>No name provided</Label>
                  ) }
              </GridItemWithName>
            ))}
          </Pattern>
        ))}
      </Wrapper>
  );
};

export default Liked;

const StyledLink = styled(Link)`
color: #FF868E; 
`
// const Pattern = styled.div`
//   padding: 10px;
//   display: grid;
//   grid-template-columns: repeat(3, 32%);
//   grid-template-rows: repeat(3, auto);
//   column-gap: 20px;
//   row-gap: 20px;

//   grid-template-areas:
//     "one two three"
//     "one four four"
//     "five four four"
//     "six seven eight"
//     "nine nine eight"
//     "nine nine ten";

//   justify-content: space-evenly;
// `;

// const GridItem = styled.div`
//   width: 100%;
//   height: 100%;
//   color: white;
//   border-radius: 20px;

//   grid-area: ${(props) => props.index === 0 && "one"};
//   grid-area: ${(props) => props.index === 1 && "two"};
//   grid-area: ${(props) => props.index === 2 && "three"};
//   grid-area: ${(props) => props.index === 3 && "four"};
//   grid-area: ${(props) => props.index === 4 && "five"};
//   grid-area: ${(props) => props.index === 5 && "six"};
//   grid-area: ${(props) => props.index === 6 && "seven"};
//   grid-area: ${(props) => props.index === 7 && "eight"};
//   grid-area: ${(props) => props.index === 8 && "nine"};
//   grid-area: ${(props) => props.index === 9 && "ten"};
// `;

// const Img = styled.img`
//   width: 100%;
//   height: 100%;
//   min-height: 120px;
//   height: ${(props) => props.index === 0 && "280px"};
//   border-radius: 20px;
//   object-fit: cover;
// `;
