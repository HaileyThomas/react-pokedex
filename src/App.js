import React from "react";
import "./App.css";

import Header from "./components/Header";
import Pokelist from "./components/Pokelist";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <div className="main-container">
          <Pokelist />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
