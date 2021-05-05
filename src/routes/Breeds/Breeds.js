import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { BreedsContext } from "../../helpers/BreedsContext";
import Select from "../../helpers/Select";
import Loader from "../../components/Shared/Loader";
import Wrapper from "../../components/Shared/Wrapper"
import GoBack from "../../components/Shared/GoBack";
import BreedsSort from "./BreedsSort";

import {
  Masonry, Pattern, Img, Label, GridItemWithName
} from "../../components/Shared/Masonry"

const Breeds = () => {
  const { chunkedKey, currBreedKey, limitKey, dogsKey, orderKey } = useContext(
    BreedsContext
  );
  const [chunked, setChunked] = chunkedKey;
  const [currBreed] = currBreedKey;
  const [limit] = limitKey;
  const [dogs, setDogs] = dogsKey;
  const [order] = orderKey;
  const [ loading, setLoading ] = useState();
  const { selected, handleSelectedClick } = Select();


useEffect(() => { 
    const breedID = currBreed.id;
    setLoading(true);
    const fetchData = async () => { 
        const response = await axios(
            `https://api.thedogapi.com/v1/images/search?limit=${limit}&order=${order}&has_breeds=true&size=med&breed_id=${
            breedID ? breedID : ""
            }`
        );
        setDogs(response.data);
        setLoading(false);
        };
    setTimeout(() => fetchData(), 1000); 
  }, [limit, currBreed, order]);


  // displaying the dogs
  useEffect(() => {
    if (dogs.length > 0) {
        setLoading(true);
        const temporary = [...dogs];
        const result = [];
        while (temporary.length > 0) {
            result.push(temporary.splice(0, 10));
        }
        
        setChunked(result);
        setLoading(false);
        }
  }, [dogs]); 

  return (
      <Wrapper>
        <Span>
          <GoBack btnContent="Breeds" />
          <BreedsSort />
        </Span>
        
        { loading ? ( 
            <Loader />
        ) : (
            <Masonry>
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
            </Masonry> 
        ) }
      </Wrapper>
  );
};

export default Breeds;

const StyledLink = styled(Link)`
color: #FF868E; 
`

const Span = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
  } 
`
