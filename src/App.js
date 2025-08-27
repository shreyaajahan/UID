import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
  const [page, setPage] = useState("home"); // default page

  return (
    <div className="App">
      <Navbar setPage={setPage} />
      <div className="page-container">
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;
