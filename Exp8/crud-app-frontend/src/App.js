import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = async (user) => {
    try {
      if (editUser) {
        await axios.put(`http://localhost:5000/users/${editUser._id}`, user);
        setEditUser(null);
      } else {
        await axios.post("http://localhost:5000/users", user);
      }
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(`http://localhost:5000/users/${id}`);
      fetchUsers();
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#003366", marginBottom: "30px" }}>
        CRUD Application - User Management
      </h1>

      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "15px",
          maxWidth: "400px",
          margin: "0 auto 30px auto",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <UserForm onSubmit={handleAdd} userData={editUser} />
      </div>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
