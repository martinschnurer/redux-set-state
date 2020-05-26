import store from "./store";
import { Payload } from "./reducer";

export const setState = (payload: Payload) => {
  store.dispatch({
    type: "SET_STATE",
    payload,
  });
};
