import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { DogContext } from "../../helpers/DogContext";


const Searchbar = () => {
  const { searchTermKey } = useContext(DogContext);
  const [searchTerm , setSearchTerm ] = searchTermKey;

  const handleEnterKey = (event) => {
    if (event.charCode === 13) {
      setSearchTerm(event.target.value)
    }
  }

  // useEffect(() => { 

  // }, [searchTerm]);


  return (
    <Div>
      <Input 
        type="text"  
        placeholder={searchTerm}
        onKeyPress={(event) => handleEnterKey(event)} />
      <Icon>
        <svg viewBox="0 0 20 20">
          <path d="M19.361 18.2168L14.601 13.2662C15.8249 11.8113 16.4954 9.98069 16.4954 8.07499C16.4954 3.62251 12.8729 0 8.42045 0C3.96797 0 0.345459 3.62251 0.345459 8.07499C0.345459 12.5275 3.96797 16.15 8.42045 16.15C10.092 16.15 11.6849 15.6458 13.0467 14.6888L17.8429 19.677C18.0434 19.8852 18.313 20 18.602 20C18.8755 20 19.1349 19.8957 19.3319 19.7061C19.7504 19.3034 19.7637 18.6357 19.361 18.2168ZM8.42045 2.10652C11.7115 2.10652 14.3889 4.78391 14.3889 8.07499C14.3889 11.3661 11.7115 14.0435 8.42045 14.0435C5.12937 14.0435 2.45198 11.3661 2.45198 8.07499C2.45198 4.78391 5.12937 2.10652 8.42045 2.10652Z"></path>
        </svg>
      </Icon>
    </Div>
  );
};

export default Searchbar;

const Input = styled.input`
  background: ${(props) => props.theme.bgSearch};
  width: 300px;
  height: 40px;
  padding: 0.8rem 0rem;
  max-width: 300px;
  outline: none;
  border: none;

  &:focus::placeholder {
    color: transparent;
  }
`;

const Div = styled.div`
  background: ${(props) => props.theme.bgBox};
  border: none;
  border-radius: 20px;
  width: 470px;
  height: 60px;
  padding: 0px 10px 0px 20px;
  border: 2px solid rgba(255, 134, 142, 0);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border: 2px solid #fbe0dc;
  }

  ${Input}:focus & {
    border: 2px solid black;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  /* background: #fbe0dc; */
  background: ${ props => props.theme.pinkBtn};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    fill: #ff868e;
  }
`;
