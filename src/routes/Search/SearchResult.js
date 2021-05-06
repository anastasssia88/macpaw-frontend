import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DogContext } from "../../helpers/DogContext";
import styled from "styled-components";
import axios from "axios";
import Select from "../../helpers/Select";

import Loader from "../../components/Shared/Loader";
import Wrapper from "../../components/Shared/Wrapper";
import GoBack from "../../components/Shared/GoBack";

import {
  Masonry,
  Pattern,
  Img,
  Label,
  GridItemWithName,
} from "../../components/Shared/Masonry";

const SearchResult = () => {
  const { searchTermKey } = useContext(DogContext);
  const [searchTerm] = searchTermKey;

  const [loading, setLoading] = useState(false);
  const [dogs, setDogs] = useState({});
  const [chunked, setChunked] = useState([]);

  const { selected, handleSelectedClick } = Select();

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.length > 3) {
        setLoading(true);
        const qp = searchTerm.toLowerCase();
        const config = {
          headers: {
            "x-api-key": "220e3104-105e-4131-96f6-194253068792",
          },
        };
        const response = await axios(
          `https://api.thedogapi.com/v1/images/search?limit=20&q=${qp}&has_breeds=true&size=med`,
          config
        );

        setDogs(response.data);
        setLoading(false);
      }
    };
    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    if (dogs.length > 0) {
      const temporary = [...dogs];
      const result = [];
      while (temporary.length > 0) {
        result.push(temporary.splice(0, 10));
      }
      setChunked(result);
    }
  }, [dogs]);

  return (
    <>
      {searchTerm === "Search for breeds by name" || !searchTerm ? (
        <Wrapper>
          <GoBack btnContent="search" />
          <SearchInfo>
            No search term found. Feel free to browser dogs by typing a breed
            name above :)
          </SearchInfo>
        </Wrapper>
      ) : (
        <Wrapper>
          <GoBack btnContent="search" />
          <SearchInfo>
            Search results for: <span>{searchTerm}</span>
          </SearchInfo>

          {loading ? (
            <Loader />
          ) : (
            <Masonry>
              {chunked.map((tenDogs, index) => (
                <Pattern key={index}>
                  {tenDogs
                    .sort((a, b) =>
                      a.width / a.height > b.width / b.height ? 1 : -1
                    )
                    .map((dog, index) => (
                      <GridItemWithName key={dog.id} index={index}>
                        <Img src={dog.url} />
                        {dog.breeds.length > 0 ? (
                          <Label>
                            <StyledLink
                              to="/breeds/selected"
                              onClick={() => handleSelectedClick(dog)}
                            >
                              {dog.breeds[0].name}
                            </StyledLink>
                          </Label>
                        ) : (
                          <Label>No name provided</Label>
                        )}
                      </GridItemWithName>
                    ))}
                </Pattern>
              ))}
            </Masonry>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default SearchResult;

const SearchInfo = styled.p`
  color: ${(props) => props.theme.textSec};
  font-size: 20px;
  margin-bottom: 20px;
  span {
    color: ${(props) => props.theme.textPrim};
  }
`;

const StyledLink = styled(Link)`
  color: #ff868e;
`;
