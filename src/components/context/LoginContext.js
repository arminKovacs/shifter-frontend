import React, { useState, createContext } from "react";
import axios from "axios";

export const LoginContext = createContext();

export function LoginProvider(props) {
  let [userData, setUserData] = useState(null);

  function sendLoginForm(inputDetails) {
    axios
      .post(
        "http://localhost:8080/login",
        {
          username: inputDetails.username,
          password: inputDetails.password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setUserData(response.data);
      });
  }

  return (
    <LoginContext.Provider value={{ userData, sendLoginForm }}>
      {props.children}
    </LoginContext.Provider>
  );
}
