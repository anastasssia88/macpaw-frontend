import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { DogProvider } from './helpers/DogContext' 
import { BreedsProvider } from './helpers/BreedsContext'


// Components
import Sidenav from './components/Sidenav/Sidenav'
import Home from './routes/Home/Home'
import Voting from './routes/Voting/Voting'
import Breeds from './routes/Breeds/Breeds'
import Gallery from './routes/Gallery/Gallery'
import Liked from './routes/Liked'
import Favorites from './routes/Favorites'
import Disliked from './routes/Dislikes'


function App() { 

  return (
    <Router>
    <ThemeProvider theme = {lightTheme}>
        <DocumentBody>
            <Sidenav />
            <DogProvider>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/voting">
                    <Voting />
                </Route>
                <Route exact path="/breeds" >
                  <BreedsProvider>
                    <Breeds />
                  </BreedsProvider>
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
            </DogProvider>
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