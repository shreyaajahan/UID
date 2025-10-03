import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // List of tasks
  const [taskInput, setTaskInput] = useState(""); // Input value

  // Add new task
  const handleAddTask = () => {
    if (taskInput.trim() === "") return; // Ignore empty
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  // Toggle completed
  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Handle enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTask();
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks yet. Add something!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span onClick={() => toggleCompleted(task.id)}>{task.text}</span>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
