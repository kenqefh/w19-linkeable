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

    case "ADD_EXPERIENCE":
      return {
        ...prevState,
        experience: [...prevState.experience, {}],
      };

    case "REMOVE_EXPERIENCE":
      return {
        ...prevState,
        experience: prevState.experience.filter(
          (_, index) => payload !== index
        ),
      };

    case "CHANGE_FIELD_EXPERIENCE":
      return {
        ...prevState,
        experience: prevState.experience.map((exp, index) =>
          payload.index !== index
            ? exp
            : { ...exp, [payload.name]: payload.value }
        ),
      };

    default:
      throw new Error("Invalid action");
  }
};

export default formReducer;
