const formReducer = (prevState, { type, payload }) => {
  const countries = {
    pe: "Peru",
    ve: "Venezuela",
    mx: "Mexico",
  };
  switch (type) {
    case "CHANGE_FIELD":
      if (payload.name === "country") {
        return {
          ...prevState,
          [payload.name]: {
            name: countries[payload.value],
            code: payload.value,
          },
        };
      }
      return { ...prevState, [payload.name]: payload.value };
    case "RESET":
      return {
        name: "",
        country: { code: "" },
        profession: "",
        experience: "",
        avatarUrl: "",
      };
    default:
      throw new Error("Invalid action");
  }
};

export default formReducer;
