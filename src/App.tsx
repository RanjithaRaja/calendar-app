import React from 'react';
import WebRouter from "./router";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
     <WebRouter />
    </Provider>
  );
}

export default App;
