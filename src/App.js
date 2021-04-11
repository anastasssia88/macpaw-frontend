import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";

// Components
import Sidenav from './layout/Sidenav'
import Home from './pages/Home'
import Voting from './pages/Voting'
import Breeds from './pages/Breeds'

function App() {
  return (
    <Router>
    <ThemeProvider theme = {lightTheme}>
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
          </Switch>
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