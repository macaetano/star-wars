import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Oswald', sans-serif;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
