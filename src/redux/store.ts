import { createStore } from "redux";
import { setStateReducer } from "./reducer";

const store = createStore(setStateReducer);

export type AppState = ReturnType<typeof store.getState>;

export default store;
