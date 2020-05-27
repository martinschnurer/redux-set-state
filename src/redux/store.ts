import { createStore } from "redux";
import { setStateReducer } from "./reducer";

const store = createStore(
  setStateReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type AppState = ReturnType<typeof store.getState>;

export default store;
