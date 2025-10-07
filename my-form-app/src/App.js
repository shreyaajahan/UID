// //Form Submitting
// import React, { useState } from "react";

// function App() {
//   // Step 1: Create state for form input
//   const [name, setName] = useState("");

//   // Step 2: Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent page reload
//     alert("Form submitted! Name: " + name);
//   };

//   return (
//     <div>
//       <h1>React Form Example</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Step 3: Controlled input */}
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)} // update state
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// //Multiple inputs in Form
// import React, { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({ name: "", email: "" });

//   const handleChange = (e) => {
//     // update state dynamically
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert(`Name: ${formData.name}, Email: ${formData.email}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Enter name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Enter email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;

//From Validation
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validate form
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    return newErrors;
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert(`Form Submitted ✅\nName: ${formData.name}, Email: ${formData.email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;









