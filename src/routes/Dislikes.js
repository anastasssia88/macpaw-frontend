import React, { useEffect, useContext, useState } from "react";
import { DogContext } from "../helpers/DogContext";

import styled from "styled-components";
import Layout from "../components/Shared/Layout";
import Wrapper from "../components/Shared/Wrapper";
import Search from "../components/Searchbar/Search";
import GoBack from "../components/Shared/GoBack";
import NoItemFound from "../components/Shared/NoItemFound";
import Loader from "../components/Shared/Loader";

const Dislikes = () => {
  const { disKey } = useContext(DogContext);
  const [disliked] = disKey;
  const [chunked, setChunked] = useState([]);
  const [ loading, setLoading ] = useState();


  useEffect(() => {
    if (disliked.length > 0) {
      setLoading(true);
      const temporary = [...disliked];
      const result = [];
      while (temporary.length > 0) {
        result.push(temporary.splice(0, 10));
      }
      setLoading(false);
      setChunked(result);
    }
  }, [disliked]);

  // if there is no items disliked
  let message;
  if (disliked.length === 0) {
    message = <NoItemFound />;
  }

  return (
      <Wrapper>
        <GoBack btnContent="Disliked" />
        {message}

        { loading ? (
            <Loader />
        ) : (
          <>
            {chunked.map((tenDogs, index) => (
              <Pattern key={index}>
                {tenDogs.map((dog, index) => (
                  <GridItem key={dog.id} index={index}>
                    <Img src={dog.url} />
                  </GridItem>
                ))}
              </Pattern>
            ))}
          </>
        ) }

      </Wrapper>
  );
};

export default Dislikes;


const Pattern = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 32%);
  grid-template-rows: repeat(3, auto);
  column-gap: 20px;
  row-gap: 20px;

  grid-template-areas:
    "one two three"
    "one four four"
    "five four four"
    "six seven eight"
    "nine nine eight"
    "nine nine ten";

  justify-content: space-evenly;
`;

const GridItem = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  border-radius: 20px;

  grid-area: ${(props) => props.index === 0 && "one"};
  grid-area: ${(props) => props.index === 1 && "two"};
  grid-area: ${(props) => props.index === 2 && "three"};
  grid-area: ${(props) => props.index === 3 && "four"};
  grid-area: ${(props) => props.index === 4 && "five"};
  grid-area: ${(props) => props.index === 5 && "six"};
  grid-area: ${(props) => props.index === 6 && "seven"};
  grid-area: ${(props) => props.index === 7 && "eight"};
  grid-area: ${(props) => props.index === 8 && "nine"};
  grid-area: ${(props) => props.index === 9 && "ten"};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  min-height: 120px;
  height: ${(props) => props.index === 0 && "280px"};
  border-radius: 20px;
  object-fit: cover;
`;
