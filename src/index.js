import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./state/store";
import { Provider, useDispatch } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);
