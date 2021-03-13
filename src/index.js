/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import App from "./App";
import { colors } from "./ui";

const fontFamily = "Inter, sans-serif";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: grey;
    font-family: ${fontFamily};
    color: ${colors.gray2};
  }
  #root {
    width: 360px;
    background: linear-gradient(180deg, #ffffff 0%, #f2f2f2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 32px;
    margin: auto;
    position: relative;
  }

  input {
    font-family: inherit;
    color: inherit;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
      <Router>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </Router>,
  </React.StrictMode>,
  document.getElementById("root")
);

