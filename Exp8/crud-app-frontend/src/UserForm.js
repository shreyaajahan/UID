import React, { useState, useEffect } from "react";

function UserForm({ onSubmit, userData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setEmail(userData.email);
      setAge(userData.age);
    }
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, age });
    setName(""); setEmail(""); setAge("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" }}
      />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" }}
      />
      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" }}
      />
      <button
        type="submit"
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          background: "#003366",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {userData ? "Update User" : "Add User"}
      </button>
    </form>
  );
}

export default UserForm;
