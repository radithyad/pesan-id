import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./Components/StateProvider";
import reducer, { initialState } from "./Components/reducer";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);