import React from "react";
import { MainPage } from "./components/view/MainPaga";
import { Header } from "./components/cells/header/header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <MainPage />;
    </div>
  );
}

export default App;
