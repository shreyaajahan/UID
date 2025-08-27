import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "50px" }}>
      <h1 style={{ color: "#333", marginBottom: "30px" }}>React Counter Application</h1>
      <Counter />
    </div>
  );
}

export default App;
