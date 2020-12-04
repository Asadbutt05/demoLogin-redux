import * as TYPES from "../../types";
const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default reducer;
