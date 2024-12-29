import { useState } from "react";

const useWeather = (city) => {
  const [weather, setWeather] = useState(null); 
  const [error, setError] = useState(""); 

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name!");
      setWeather(null);
      return;
    }

    if (city.toLowerCase() !== "kakkanad") {
      setError("City not found!");
      setWeather(null);
      return;
    }

    const apiKey = "8ac5c4d57ba6a4b3dfcf622700447b1e"; 
    const url = ` https://api.openweathermap.org/data/2.5/weather?q=kakkanad&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric&authuser=0`;


    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError("");
      } else {
        setWeather(null);
        setError(data.message); }
    } catch (err) {
      setWeather(null);
      setError("Something went wrong. Please try again.");
    }
  };

  return { weather, error, fetchWeather };
};

export default useWeather;
