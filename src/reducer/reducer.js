const initialState = {
  count: 0,
  order: false
};
const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1
    };
  }
  if (action.type === "RESET") {
    return {
      count: (state.count = 0)
    };
  }
  if (action.type === "CHANGE") {
    return { ...state, order: !state.order };
  }

  return state;
};

export default reducer;
