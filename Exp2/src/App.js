<<<<<<< HEAD
import React, { useRef, useState } from "react";
import "./App.css";
import UserProfile from "./UserProfile";

function App() {
  const nameRef = useRef();
  const emailRef = useRef();
  const bioRef = useRef();
  const educationRef = useRef();
  const dobRef = useRef();
  const phoneRef = useRef();

  const [profile, setProfile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({
      name: nameRef.current.value,
      email: emailRef.current.value,
      bio: bioRef.current.value,
      education: educationRef.current.value,
      dob: dobRef.current.value,
      phone: phoneRef.current.value,
    });
  };

  return (
    <div className="container">
      {!profile ? (
        <form className="form" onSubmit={handleSubmit}>
          <h1>Create Your Profile</h1>
          <input type="text" placeholder="Enter your name" ref={nameRef} required />
          <input type="email" placeholder="Enter your email" ref={emailRef} required />
          <textarea placeholder="Write a short bio" ref={bioRef} rows="3" required></textarea>
          <input type="text" placeholder="Enter your education" ref={educationRef} required />
          <input type="date" placeholder="Enter your date of birth" ref={dobRef} required />
          <input type="tel" placeholder="Enter your phone number" ref={phoneRef} required />
          <button type="submit">Save Profile</button>
        </form>
      ) : (
        <UserProfile {...profile} />
      )}
=======
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
>>>>>>> 1f031f3ba228f2e1f6d1dcda589c6e54acd40eb0
    </div>
  );
}

export default App;
