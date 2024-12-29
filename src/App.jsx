import React, { useState } from "react";
import useWeather from "./useWeather";
import "./App.css";

const App = () => {
  const [city, setCity] = useState(""); 
  const { weather, error, fetchWeather } = useWeather(city); 

  return (
    <div className="app">
      <h1>Weather Scope</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter the city name"
          value={city}
          onChange={(e) => setCity(e.target.value)} 
        />
        <button onClick={fetchWeather}>See the Forecast</button>
      </div>

      {error && <p className="error">{error}</p>} 

      {weather && (
        <div className="weather-info">
          <h2>Weather in {weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Real Feel: {weather.main.feels_like}°C</p>
          <p>Sky Status: {weather.weather[0].description}</p>
          <p>Dew point: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
