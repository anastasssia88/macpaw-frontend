import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";

// Components
import Sidenav from './layout/Sidenav'

function App() {
  return (
    <Router>
    <ThemeProvider theme = {lightTheme}>
      <DocumentBody>
          <Sidenav />
          <div>
            <h1>Hi Intern!</h1>
            <p>Welcome to MSI 2021 Front-end test</p>
          </div>
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