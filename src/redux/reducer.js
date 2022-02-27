import { ADD_CHART, MIN_CHART } from "./type";

const initialState = {
  value: 0,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHART:
      return {
        ...state,
        value: state.value + 1,
      };
    case MIN_CHART:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
