import { useAuth0 } from "@auth0/auth0-react";

function AuthenticationUser ()  {
  const  {user}  = useAuth0();  
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? `Continue as ${user.given_name}` : "Continue as Guest"
  ;
};

export default AuthenticationUser;