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
            {tenDogs
            .sort((a,b) => (a.width/a.height > b.width/b.height ? 1 : -1))
            .map((dog, index) => (
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