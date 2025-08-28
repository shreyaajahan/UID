import React, { useState } from "react";
import "./Counter.css";

const Post = () => {
  const [likes, setLikes] = useState(0);   // Number of likes
  const [views, setViews] = useState(100); // Optional: post views

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setLikes(likes > 0 ? likes - 1 : 0); // Prevent negative likes
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ marginBottom: "10px" }}>Amazing Sunset!</h2>
      <p style={{ color: "#555" }}>Look at this beautiful sunset I captured yesterday 🌅</p>
      
      <div style={{ margin: "20px 0", textAlign: "left" }}>
        <span style={{ marginRight: "15px" }}>❤️ {likes} Likes</span>
        <span>👀 {views} Views</span>
      </div>

      <div>
        <button
          onClick={handleLike}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#ff4d6d",
            color: "#fff",
            marginRight: "10px",
            transition: "background 0.3s"
          }}
          onMouseOver={e => e.target.style.backgroundColor = "#ff667f"}
          onMouseOut={e => e.target.style.backgroundColor = "#ff4d6d"}
        >
          ❤️ Like
        </button>

        <button
          onClick={handleDislike}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#aaa",
            color: "#fff",
            transition: "background 0.3s"
          }}
          onMouseOver={e => e.target.style.backgroundColor = "#888"}
          onMouseOut={e => e.target.style.backgroundColor = "#aaa"}
        >
          👎 Dislike
        </button>
      </div>
    </div>
  );
};

export default Post;
