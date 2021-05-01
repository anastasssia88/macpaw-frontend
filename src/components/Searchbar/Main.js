import React, {useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { DogContext } from "../../helpers/DogContext";
import styled from "styled-components"

import Search from "../Searchbar/Search"
import SearchResult from "../../routes/Search/SearchResult";

import Home from "../../routes/Home/Home";
import Voting from "../../routes/Voting/Voting";
import Breeds from "../../routes/Breeds/Breeds";
import Gallery from "../../routes/Gallery/Gallery";
import Liked from "../../routes/Liked";
import Favorites from "../../routes/Favorites";
import Disliked from "../../routes/Dislikes"; 
import Selected from "../../routes/Selected/Selected";
import { BreedsProvider } from "../../helpers/BreedsContext";
import { GalleryProvider } from "../../helpers/GalleryContext";


const Main = ({children}) => {
    const { searchTermKey } = useContext(DogContext);
    const [searchTerm , setSearchTerm ] = searchTermKey;

    return (
       <StyledSection flexCol>
           <Search />
           { searchTerm === "Search for breeds by name" ? (
               children
           ) : (
               
               <Router>
                        <Redirect to="/search" />
                        <Route path="/search">
                            <SearchResult searchTerm={searchTerm}/>
                        </Route>
                </Router>
               
               
           ) }

           
           
        </StyledSection>
           
      
    )
}

export default Main


const StyledSection = styled.div`
 background: ${(props) => props.theme.bgMain};
  height: auto;
  min-height: 100vh;
  max-height: ${(props) => props.maxH100 && "100vh"};
  height: ${(props) => props.maxH100 && "100vh"};
  /* max-height: ${(props) => props.uploadOpen && "100vh"}; */
  height: ${(props) => props.uploadOpen && "80vh"};
  overflow: ${(props) => props.uploadOpen && "hidden"};

  width: 50%;
  padding: 1.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  flex-direction: ${(props) => (props.flexCol ? "column" : "row")};
`