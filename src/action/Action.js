export const increment = () => (dispatch) => {
  dispatch({
    type: "INCREMENT"
  });
};

export const reset = () => (dispatch) => {
  return dispatch({
    type: "RESET"
  });
};
export const changeorder = () => (dispatch) => {
  return dispatch({
    type: "CHANGE"
  });
};
