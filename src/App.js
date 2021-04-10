import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";

// Components
import Sidenav from './layout/Sidenav'
import Home from './pages/Home'

function App() {
  return (
    <Router>
    <ThemeProvider theme = {lightTheme}>
      <DocumentBody>
          <Sidenav />
          <Home />
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