import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export function LoginProvider(props) {
  let [loginDetails, setLoginDetails] = useState("");

  return (
    <LoginContext.Provider value={{ loginDetails, setLoginDetails }}>
      {props.children}
    </LoginContext.Provider>
  );
}
