import React from "react";
import { useHistory } from "react-router";
import CircleButton from "./CircleButton";
import { RiAddLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationSearch = () => {
    const history = useHistory();
    const handleAddClick = () => {
        history.push("/multiform");
      };
    const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <CircleButton><RiAddLine onClick={handleAddClick} /></CircleButton> : ""             
;
};

export default AuthenticationSearch;