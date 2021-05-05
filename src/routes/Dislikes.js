import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DogContext } from "../helpers/DogContext";
import Select from "../helpers/Select";

import styled from "styled-components";
import Wrapper from "../components/Shared/Wrapper";
import GoBack from "../components/Shared/GoBack";
import NoItemFound from "../components/Shared/NoItemFound";
import Loader from "../components/Shared/Loader";

import {
  Pattern, Img, GridItemWithName, Label
} from "../components/Shared/Masonry" 

const Dislikes = () => {
  const { disKey } = useContext(DogContext);
  const [disliked] = disKey;
  const [chunked, setChunked] = useState([]);
  const [ loading, setLoading ] = useState();
  const { handleSelectedClick } = Select();



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
                  <GridItemWithName key={dog.id} index={index}>
                    <Img src={dog.url} />
                    { dog.breeds.length > 0 ? (
                        <Label><StyledLink to="/breeds/selected" onClick={() => handleSelectedClick(dog)}>  {dog.breeds[0].name}</StyledLink></Label>
                        ) : (
                          <Label>No name provided</Label>
                        ) }
                  </GridItemWithName>
                ))}
              </Pattern>
            ))}
          </>
        ) }

      </Wrapper>
  );
};

export default Dislikes;

const StyledLink = styled(Link)`
color: #FF868E; 
`