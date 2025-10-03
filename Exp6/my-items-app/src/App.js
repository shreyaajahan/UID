import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", quantity: "" });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter a name.");
      return;
    }
    if (!form.quantity || Number(form.quantity) <= 0) {
      alert("Quantity must be at least 1.");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: form.name.trim(),
      description: form.description.trim(),
      quantity: Number(form.quantity),
    };

    setItems((prev) => [...prev, newItem]);
    setForm({ name: "", description: "", quantity: "" }); // reset form
  };

  // delete an item
  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Add New Item</h1>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Name *
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Item name"
            required
          />
        </label>

        <label>
          Description
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Optional"
          />
        </label>

        <label>
          Quantity *
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="1"
            required
          />
        </label>

        <button type="submit">Add Item</button>
      </form>

      <h2>Items List</h2>
      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <ul className="list">
          {items.map((item) => (
            <li key={item.id} className="list-item">
              <div>
                <strong>{item.name}</strong> (Qty: {item.quantity})<br />
                <em>{item.description || "No description"}</em>
              </div>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
