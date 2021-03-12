const queryReducer = (prevState, { type, payload }) => {
  let newState;
  switch (type) {
    case "CHANGE_FIELD":
      newState = { ...prevState, [payload.name]: payload.value };
      break;
    case "REMOVE_COUNTRY":
      newState = {
        ...prevState,
        queryCountry: prevState.queryCountry.filter(
          (c) => c !== payload.removeCountry
        ),
      };
      break;
    case "ADD_COUNTRY":
      const newList = new Set([...prevState.queryCountry, payload]);
      newState = {
        ...prevState,
        queryCountry: [...newList],
      };
      break;
    default:
      throw new Error("Invalid action");
  }
  return newState;
};

export default queryReducer;
