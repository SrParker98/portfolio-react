import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import CookieConsent, {
  Cookies,
  getCookieConsentValue,
  resetCookieConsentValue,
} from "react-cookie-consent";
import ReactGA from "react-ga4";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <CookieConsent
      debug={true}
      location="bottom"
      buttonText="Sure man!!"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
      enableDeclineButton
      visible="byCookieValue"
      hideOnAccept="true"
      onAccept={() => {
        ReactGA.initialize([
          {
            trackingId: "G-4DH32LRCJM",
          },
        ]);
      }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>

    <App />
  </div>
);
