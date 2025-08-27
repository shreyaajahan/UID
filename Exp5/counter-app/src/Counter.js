import React, { useState } from "react";
import "./Counter.css";


const Counter = () => {
  const [count, setCount] = useState(0);      // Current count
  const [step, setStep] = useState(1);        // Increment/decrement step

  const handleIncrement = () => {
    setCount(count + Number(step));
  };

  const handleDecrement = () => {
    setCount(count - Number(step));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>Counter Application</h1>
      <h2>Current Count: {count}</h2>

      <div style={{ margin: "20px 0" }}>
        <label>
          Step:{" "}
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(e.target.value)}
            style={{ width: "60px", padding: "5px", textAlign: "center" }}
          />
        </label>
      </div>

      <button 
        onClick={handleIncrement} 
        style={{ padding: "10px 20px", marginRight: "10px", fontSize: "16px" }}
      >
        Increment
      </button>
      <button 
        onClick={handleDecrement} 
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
