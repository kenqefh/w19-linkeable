const genreReducer = (prevGender, { type, payload }) => {
  switch (type) {
    case "ADD_GENDER":
      return [...new Set([...prevGender, payload])];

    case "REMOVE_GENDER":
      return prevGender.filter((genre) => genre !== payload);

    default:
      throw new Error("Invalid option for Genre reducer");
  }
};

const countryReducer = (prevCountry, { type, payload }) => {
  switch (type) {
    case "ADD_COUNTRY":
      return [...new Set([...prevCountry, payload])];

    case "REMOVE_COUNTRY":
      return prevCountry.filter((country) => country !== payload);

    default:
      throw new Error("Invalid option for Country reducer");
  }
};

const queryReducer = (prevState, action) => {
  let { type, payload } = action;
  let newState;
  switch (type) {
    case "CHANGE_FIELD":
      newState = { ...prevState, [payload.name]: payload.value };
      break;

    case "ADD_COUNTRY":
    case "REMOVE_COUNTRY":
      newState = {
        ...prevState,
        queryCountry: countryReducer(prevState.queryCountry, action),
      };
      break;

    case "ADD_GENDER":
    case "REMOVE_GENDER":
      newState = {
        ...prevState,
        queryGender: genreReducer(prevState.queryGender, action),
      };
      break;
    default:
      throw new Error("Invalid action");
  }
  return newState;
};

export default queryReducer;
