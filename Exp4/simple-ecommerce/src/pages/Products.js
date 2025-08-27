import React, { useState } from "react";

const Products = () => {
  const [products] = useState([
    {
      id: 1,
      name: "T-Shirt",
      price: 45,
      description: "Comfortable cotton t-shirt in various sizes.",
      image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/30313117/2024/7/22/f6a4cdd8-d6b1-4ad2-9f74-7594c4ddb7a81721644493724HELLCATWomenPrintedExtendedSleevesCutOutsT-shirt1.jpg"
    },
    {
      id: 2,
      name: "Jeans",
      price: 40,
      description: "Stylish blue jeans with perfect fit.",
      image: "https://levi.in/cdn/shop/files/A94900007_01_Elevated.jpg?v=1743418283"
    },
    {
      id: 3,
      name: "Shoes",
      price: 60,
      description: "Comfortable running shoes for everyday wear.",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&h=300"
    },
    {
      id: 4,
      name: "Watch",
      price: 100,
      description: "Stylish and Classic analog watches.",
      image: "https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_roseblack.jpg?v=1696689556&width=300"
    },
    {
      id: 5,
      name: "Perfume",
      price: 80,
      description: "Smell Fresh and Bloom like flowers",
      image: "https://plumgoodness.com/cdn/shop/files/MKD_01.jpg?v=1728452056&width=300"
    },
    {
      id: 6,
      name: "Bracelets",
      price: 50,
      description: "Elegant and stylish",
      image: "https://starkle.in/cdn/shop/files/conn_brac2.png?v=1687867150&width=300"
    },
  ]);

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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Products</h1>
      <div style={gridStyle}>
        {products.map((product) => (
          <div key={product.id} style={cardStyle}>
            <img src={product.image} alt={product.name} style={imgStyle} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><b>${product.price}</b></p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
