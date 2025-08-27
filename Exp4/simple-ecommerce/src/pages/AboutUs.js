import React from "react";

const AboutUs = () => {
  const containerStyle = {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "30px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  };

  const heroStyle = {
    width: "100%",
    height: "250px",
    backgroundImage: "url('https://images.pexels.com/photos/715688/pexels-photo-715688.jpeg?auto=compress&cs=tinysrgb&h=400')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "36px",
    fontWeight: "bold",
    textShadow: "2px 2px 6px rgba(0,0,0,0.6)"
  };

  const sectionStyle = {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  };

  const headingStyle = {
    fontSize: "28px",
    marginBottom: "15px",
    color: "#222",
    textAlign: "center",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "15px",
  };

  const missionValuesContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-between",
    marginTop: "20px",
  };

  const cardStyle = {
    flex: "1 1 45%",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const cardHeading = {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#444",
  };

  return (
    <div style={containerStyle}>
      <div style={heroStyle}>About Us</div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Welcome to My E-commerce Store</h2>
        <p style={paragraphStyle}>
          We are committed to providing the best quality products at amazing prices. Our mission is to make shopping
          easy, fun, and accessible for everyone.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Who We Are</h2>
        <p style={paragraphStyle}>
          We specialize in clothing, accessories, footwear, and lifestyle products. Our team carefully curates each item
          to ensure high quality and great value.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Our Mission & Values</h2>
        <div style={missionValuesContainer}>
          <div style={cardStyle}>
            <h3 style={cardHeading}>Our Mission</h3>
            <p>To deliver high-quality products that bring style, comfort, and value to our customers’ lives.</p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardHeading}>Our Values</h3>
            <p>Customer satisfaction, transparency, sustainability, and continuous improvement are at the heart of our store.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
