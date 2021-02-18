import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`

  body,html {
      margin: 0;
      padding: 0;
      font-family: 'Oswald', sans-serif;
  }

  input, button {
      font-family: 'Oswald', sans-serif;

  }

  * {
      box-sizing: border-box;
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
