import React from "react";
import Button from "../components/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;