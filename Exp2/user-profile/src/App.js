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
    </div>
  );
}

export default App;
