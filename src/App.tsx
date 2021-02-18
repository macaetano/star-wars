import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import store from "./store";

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
      <Provider store={store}>
        <GlobalStyle />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
