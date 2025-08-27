import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const imgStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "space-between",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "8px",
    width: "30%", // 3 cards per row
    boxSizing: "border-box",
    textAlign: "center",
  };

  const featuredProducts = [
    {
      id: 1,
      name: "T-Shirt",
      price: 45,
      image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/30313117/2024/7/22/f6a4cdd8-d6b1-4ad2-9f74-7594c4ddb7a81721644493724HELLCATWomenPrintedExtendedSleevesCutOutsT-shirt1.jpg"
    },
    {
      id: 2,
      name: "Jeans",
      price: 40,
      image: "https://levi.in/cdn/shop/files/A94900007_01_Elevated.jpg?v=1743418283"
    },
    {
      id: 3,
      name: "Shoes",
      price: 60,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&h=300"
    },
    {
      id: 4,
      name: "Watch",
      price: 100,
      image: "https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_roseblack.jpg?v=1696689556&width=300"
    },
    {
      id: 5,
      name: "Perfume",
      price: 80,
      image: "https://plumgoodness.com/cdn/shop/files/MKD_01.jpg?v=1728452056&width=300"
    },
    {
      id: 6,
      name: "Bracelets",
      price: 50,
      image: "https://starkle.in/cdn/shop/files/conn_brac2.png?v=1687867150&width=300"
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to My E-commerce Store</h1>
      <p>
        Find the best products at amazing prices. Browse our latest collection of clothing and accessories.
      </p>
      <Link to="/products">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Shop Now
        </button>
      </Link>

      <section style={{ marginTop: "40px" }}>
        <h2>Featured Products</h2>
        <div style={gridStyle}>
          {featuredProducts.map((product) => (
            <div key={product.id} style={cardStyle}>
              <img src={product.image} alt={product.name} style={imgStyle} />
              <h3>{product.name}</h3>
              <p><b>${product.price}</b></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
