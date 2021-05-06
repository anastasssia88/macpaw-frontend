import React, { useEffect, useContext, useState } from "react";
import { DogContext } from "../helpers/DogContext";
import HandleVote from "../helpers/HandleVote";

import styled from "styled-components";
import Wrapper from "../components/Shared/Wrapper";
import GoBack from "../components/Shared/GoBack";
import NoItemFound from "../components/Shared/NoItemFound";
import LogItem from "./Voting/LogItem";

import {
  Pattern,
  Img,
  Label,
  GridItemWithLike,
} from "../components/Shared/Masonry";

const Favorites = () => {
  const { favKey } = useContext(DogContext);
  const [favorites, addToFav] = favKey;
  const [chunked, setChunked] = useState([]);

  const [favoritesLog, setFavoritesLog] = useState([]);
  const { getTime } = HandleVote();

  const removeFromFavorites = (id, index) => {
    let newFav = [...favorites];
    newFav.splice(index, 1);
    addToFav(newFav);
    setFavoritesLog((prevLog) => [
      ...prevLog,
      {
        id: id,
        content: "was removed from Favourites",
        type: "",
        time: getTime(),
      },
    ]);
  };

  useEffect(() => {
    if (favorites.length >= 0) {
      const temporary = [...favorites];
      const result = [];
      while (temporary.length > 0) {
        result.push(temporary.splice(0, 10));
      }
      setChunked(result);
    }
  }, [favorites]);

  // if there is no favorite items
  let message;
  if (favorites.length === 0) {
    message = <NoItemFound />;
  }

  return (
    <Wrapper>
      <GoBack btnContent="Favorites" />
      {message}
      {chunked.map((tenDogs, index) => (
        <Pattern key={index}>
          {tenDogs.map((dog, index) => (
            <GridItemWithLike key={dog.id} index={index}>
              <Img src={dog.url} />
              <Label onClick={() => removeFromFavorites(dog.id, index)}>
                <svg viewBox="0 0 30 30">
                  <path d="M8.07107 2C3.61354 2 0 5.61354 0 10.0711C0 12.2116 0.850339 14.2646 2.36396 15.7782L14.2929 27.7071C14.6834 28.0976 15.3166 28.0976 15.7071 27.7071L27.636 15.7782C29.1497 14.2646 30 12.2116 30 10.0711C30 5.61354 26.3865 2 21.9289 2C19.7884 2 17.7354 2.85034 16.2218 4.36396L15 5.58579L13.7782 4.36396C12.2646 2.85034 10.2116 2 8.07107 2Z"></path>
                </svg>
              </Label>
            </GridItemWithLike>
          ))}
        </Pattern>
      ))}
      <ActionLog>
        {favoritesLog.map((item, index) => (
          <LogItem
            key={index}
            id={item.id}
            content={item.content}
            type={item.type}
            time={item.time}
          />
        ))}
      </ActionLog>
    </Wrapper>
  );
};

export default Favorites;

const ActionLog = styled.div`
  margin: 10px 0px;
  width: 100%;
`;
