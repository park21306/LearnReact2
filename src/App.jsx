import { useState } from "react";
import Header from "./components/Header";
import "./components/Header.css";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
    </div>
  );
}

export default App;
