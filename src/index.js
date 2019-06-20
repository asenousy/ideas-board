import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "redux-starter-kit";
import { reducer } from "./store";
import App from "./App";
import "./index.css";
import { loadState, saveState } from "./helpers/localStorage";
import throttle from "lodash.throttle";
import configs from "./configs";

const store = configureStore({ reducer, preloadedState: loadState() });

store.subscribe(
  throttle(() => {
    saveState({
      ideas: store.getState().ideas
    });
  }, configs.throttleRate)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
