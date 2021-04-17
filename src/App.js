import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import { DogProvider } from '../src/DogContext'

// Components
import Sidenav from './layout/Sidenav'
import Home from './pages/Home'
import Voting from './pages/Voting'
import Breeds from './pages/Breeds'
import Gallery from './pages/Gallery'
import Liked from './pages/Liked'
import Favorites from './pages/Favorites'
import Disliked from './pages/Dislikes'

function App() {
  return (
    <Router>
    <ThemeProvider theme = {lightTheme}>
      <DogProvider>
        <DocumentBody>
            <Sidenav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/voting">
                  <Voting />
              </Route>
              <Route exact path="/breeds" >
                  <Breeds />
              </Route>
              <Route exact path="/gallery" >
                  <Gallery />
              </Route>
              <Route exact path="/liked" >
                  <Liked />
              </Route>
              <Route exact path="/favorites" >
                  <Favorites />
              </Route>
              <Route exact path="/disliked" >
                  <Disliked />
              </Route>
            </Switch>
        </DocumentBody>
      </DogProvider>
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