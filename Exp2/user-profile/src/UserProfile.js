import React from "react";

function UserProfile(props) {
  return (
    <div className="profile-card">
      <h1>{props.name}</h1>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Bio:</strong> {props.bio}</p>
      <p><strong>Education:</strong> {props.education}</p>
      <p><strong>Date of Birth:</strong> {props.dob}</p>
      <p><strong>Phone:</strong> {props.phone}</p>
    </div>
  );
}

export default UserProfile;
