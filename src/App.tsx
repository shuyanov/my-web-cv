import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { NavBar } from "./components/navBar/navBar";

function App() {
  return (
    <div>
      <Header />
      <div className="bodyContainer">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
