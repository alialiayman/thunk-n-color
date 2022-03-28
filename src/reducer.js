function todo(state = [], action) {
  switch (action.type) {
    case "Add1":
      return state.concat([action.text]);
    default:
      return state;
  }
}

export function addTime() {
  return (dispatch, getState) => {
    dispatch({ type: "Add1", text: getState().length });

  };
}

export default todo;
