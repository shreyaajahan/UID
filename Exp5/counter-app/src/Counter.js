import React, { useState } from "react";

const Post = () => {
  const [likes, setLikes] = useState(45);
  const [views, setViews] = useState(320);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setLikes(likes > 0 ? likes - 1 : 0);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "680px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 25px rgba(0,0,0,0.1)";
        }}
      >
        {/* Image */}
        <div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1501973801540-537f08ccae7b"
            alt="Sunset over the lake"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Content */}
        <div style={{ padding: "25px 35px" }}>
          <h2
            style={{
              marginBottom: "10px",
              color: "#2d3436",
              fontSize: "1.8rem",
              textAlign: "center",
            }}
          >
            Golden Hour by the Lake 🌅
          </h2>

          <p
            style={{
              color: "#636e72",
              fontSize: "1.1rem",
              textAlign: "center",
              marginBottom: "30px",
              lineHeight: "1.6",
            }}
          >
            The reflection of the setting sun over the still water was absolutely
            mesmerizing. Couldn’t resist capturing this beautiful moment.
          </p>

          {/* Likes & Views */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
              fontSize: "1.6rem",
              fontWeight: "600",
            }}
          >
            <span style={{ marginRight: "40px", color: "#e63946" }}>
              ❤️ {likes} Likes
            </span>
            <span style={{ color: "#1d3557" }}>👀 {views} Views</span>
          </div>

          {/* Buttons */}
          <div style={{ textAlign: "center" }}>
            <button
              onClick={handleLike}
              style={{
                padding: "12px 30px",
                fontSize: "17px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#1d3557",
                color: "#fff",
                marginRight: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#264a7e")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#1d3557")}
            >
              ❤️ Like
            </button>

            <button
              onClick={handleDislike}
              style={{
                padding: "12px 30px",
                fontSize: "17px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#adb5bd",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#8d99ae")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#adb5bd")}
            >
              👎 Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
