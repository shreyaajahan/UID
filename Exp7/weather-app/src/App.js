import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "229766e517c7cb1df1f4b31c65b951fa"; // Replace with your OpenWeatherMap key

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (res.ok) {
        setWeather(data);
      } else {
        setError(data.message || "City not found");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        background: "#e6f2ff",
        minHeight: "100vh",
        padding: "50px 20px",
      }}
    >
      <h1 style={{ color: "#003366" }}>🌤 Weather App</h1>
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          onClick={fetchWeather}
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#003366",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get Weather
        </button>
      </div>

      {loading && <p style={{ fontSize: "18px", color: "#555" }}>Loading...</p>}

      {error && <p style={{ color: "red", fontSize: "18px" }}>{error}</p>}

      {weather && (
        <div
          style={{
            display: "inline-block",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            marginTop: "20px",
            minWidth: "250px",
          }}
        >
          <h2 style={{ color: "#003366" }}>
            {weather.name}, {weather.sys.country}
          </h2>
          <h3 style={{ fontSize: "28px", margin: "10px 0" }}>
            {Math.round(weather.main.temp)}°C
          </h3>
          <p style={{ textTransform: "capitalize", fontSize: "18px" }}>
            {weather.weather[0].description}
          </p>
          <img
            alt="weather icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <p style={{ margin: "5px 0" }}>Humidity: {weather.main.humidity}%</p>
          <p style={{ margin: "5px 0" }}>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
