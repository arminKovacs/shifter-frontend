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

  function logout() {
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:8080/logout", {
      withCredentials: true,
    });
  }

  return (
    <LoginContext.Provider
      value={{ userData, setUserData, sendLoginForm, logout }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
