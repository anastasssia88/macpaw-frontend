import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./theme/globalStyles";
import { DogProvider } from "./helpers/DogContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <DogProvider>
      <App />
    </DogProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
