import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import logo from "./images/logo.png";

let Logo = styled.div`
  background-image: url(${logo});
  height: 42%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  vertical-align: bottom;
  display: inline-block;
  top: 1px;
  border-bottom: 2px solid transparent;
`;

function App() {

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
