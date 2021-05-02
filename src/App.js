import React, {useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import { DogContext } from "./helpers/DogContext";
import { BreedsProvider } from "./helpers/BreedsContext";
import { GalleryProvider } from "./helpers/GalleryContext";

// Components
import Sidenav from "./components/Sidenav/Sidenav";
import Home from "./routes/Home/Home";
import Voting from "./routes/Voting/Voting";
import Breeds from "./routes/Breeds/Breeds";
import Gallery from "./routes/Gallery/Gallery";
import Liked from "./routes/Liked";
import Favorites from "./routes/Favorites";
import Disliked from "./routes/Dislikes"; 
import Selected from "./routes/Selected/Selected";
import SearchResult from "./routes/Search/SearchResult";
import Search from "./components/Searchbar/Search"



function App() {
  const [ theme, setTheme ] = useState(lightTheme)
  const { searchTermKey } = useContext(DogContext)
  const [ searchTerm , setSearchTerm ] = searchTermKey

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <DocumentBody>
          <Sidenav theme={theme} setTheme={setTheme} />
            <Switch>
              <Route exact path="/" component={Home} />
              <StyledSection flexCol>
                <Search />         
                <Route exact path="/voting">
                  <Voting />
                </Route>
                <Route exact path="/breeds">
                  <BreedsProvider>
                    <Breeds />
                  </BreedsProvider>
                </Route>
                <Route exact path="/breeds/selected" component={Selected} />
                <Route exact path="/gallery">
                  <GalleryProvider>
                    <Gallery />
                  </GalleryProvider>
                </Route>
                <Route exact path="/liked">
                  <Liked />
                </Route>
                <Route exact path="/favorites">
                  <Favorites />
                </Route>
  
                <Route exact path="/disliked">
                  <Disliked />
                </Route>

                <Route exact path="/search">
                  <SearchResult />
                </Route>

              </StyledSection>

            </Switch>

            {searchTerm !== "Search for breeds by name" && (
              <Redirect push to="/search" />
            )}
        </DocumentBody>
      </ThemeProvider>
    </Router>
  );
}

export default App;

const DocumentBody = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
`;

const StyledSection = styled.div`
  background: ${(props) => props.theme.bgMain};
  height: auto;
  min-height: 100vh;
  max-height: auto;

  width: 50%;
  padding: 1.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  flex-direction: ${(props) => (props.flexCol ? "column" : "row")};
`