interface Todo {
  name: string;
}

interface State {
  list: Todo[];
}

const defaultState: State = {
  list: [],
};

export type Payload = State | ((s: State) => State);

type Action = {
  type: "SET_STATE";
  payload: Payload;
};

export const setStateReducer = (
  state: State = defaultState,
  action: Action
) => {
  const { payload, type } = action;

  if (type !== "SET_STATE") {
    return state;
  }

  if (typeof payload === "function") {
    return payload(state);
  } else {
    return payload;
  }
};
