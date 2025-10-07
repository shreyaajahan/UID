import React, { useState, useRef } from "react";

function App() {
  const [controlledName, setControlledName] = useState("");
  const uncontrolledRef = useRef();

  const handleControlledSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled Input Value: ${controlledName}`);
  };

  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    alert(`Uncontrolled Input Value: ${uncontrolledRef.current.value}`);
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #f0f4ff, #e0f7fa)",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2983/2983789.png"
          alt="React Components"
          style={{ width: "120px", marginBottom: "15px" }}
        />
        <h1 style={{ color: "#1a237e", fontSize: "2rem" }}>
          Controlled vs Uncontrolled Components
        </h1>
        <p style={{ color: "#555", maxWidth: "700px", margin: "10px auto" }}>
          Learn the difference between controlled and uncontrolled components in
          React — how state and refs manage input values differently.
        </p>
      </div>

      {/* Components Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {/* Controlled Component Card */}
        <div
          style={{
            backgroundColor: "#fff",
            width: "350px",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-8px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
            alt="Controlled Component"
            style={{ width: "70px", display: "block", margin: "0 auto 20px" }}
          />
          <h2 style={{ color: "#1565c0", textAlign: "center" }}>
            Controlled Component
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "20px" }}>
            In controlled components, the form data is handled by the React
            component’s <b>state</b>.
          </p>

          <form onSubmit={handleControlledSubmit}>
            <input
              type="text"
              value={controlledName}
              onChange={(e) => setControlledName(e.target.value)}
              placeholder="Enter your name"
              style={{
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #90caf9",
                marginBottom: "15px",
                fontSize: "16px",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#1565c0",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "8px",
                cursor: "pointer",
                width: "100%",
                fontWeight: "600",
              }}
            >
              Submit
            </button>
          </form>

          <p
            style={{
              marginTop: "15px",
              fontSize: "15px",
              textAlign: "center",
              color: "#333",
            }}
          >
            Current value: <b>{controlledName || "—"}</b>
          </p>
        </div>

        {/* Uncontrolled Component Card */}
        <div
          style={{
            backgroundColor: "#fff",
            width: "350px",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-8px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
            alt="Uncontrolled Component"
            style={{ width: "70px", display: "block", margin: "0 auto 20px" }}
          />
          <h2 style={{ color: "#2e7d32", textAlign: "center" }}>
            Uncontrolled Component
          </h2>
          <p style={{ color: "#555", textAlign: "center", marginBottom: "20px" }}>
            In uncontrolled components, form data is handled by the <b>DOM</b>{" "}
            itself via <b>refs</b>.
          </p>

          <form onSubmit={handleUncontrolledSubmit}>
            <input
              type="text"
              ref={uncontrolledRef}
              placeholder="Enter your name"
              style={{
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #a5d6a7",
                marginBottom: "15px",
                fontSize: "16px",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#2e7d32",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "8px",
                cursor: "pointer",
                width: "100%",
                fontWeight: "600",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
