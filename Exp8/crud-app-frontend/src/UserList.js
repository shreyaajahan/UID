import React from "react";

function UserList({ users, onDelete, onEdit }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          maxWidth: "800px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ background: "#003366", color: "#fff" }}>
            <th style={{ padding: "12px", textAlign: "center" }}>Name</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Email</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Age</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #ccc",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <button
                  onClick={() => onEdit(user)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#ffa500",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user._id)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#ff4d4d",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="4" style={{ padding: "20px", textAlign: "center", color: "#555" }}>
                No users available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
