import React, { useContext, useState, useEffect } from "react";
import { WeatherContext } from "../../context/weatherContext";
import axios from "axios";

import './forecast.styles.scss'

const Forecast = () => {
  const { weatherData } = useContext(WeatherContext);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.openweathermap.org/data/2.5/forecast";
      const key = "9e06b5a1281bc72228b7f14c9e850bb5";

      try {
        const response = await axios.get(`${url}?q=${weatherData.name}&appid=${key}&units=metric`);
        setForecastData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    if (weatherData) {
      fetchData();
    }
  }, [weatherData]);

  const renderForecast = () => {
    if (!forecastData) {
      return <p>Loading...</p>;
    }

    const dailyForecasts = forecastData.list.filter(
      (forecast) => forecast.dt_txt.endsWith("12:00:00")
    );

    return (
        <div className="forecast-container">
        <h2>5-day forecast for {weatherData.name}</h2>
        <div className="daily-forecasts">
          {dailyForecasts.map((forecast) => (
            <div key={forecast.dt} className="forecast-card">
              <p className="date">{forecast.dt_txt.split(" ")[0]}</p>
              <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                alt={forecast.weather[0].description}
              />
              <p className="temp">Temperature: {Math.round(forecast.main.temp)}°C</p>
              <p className="desc">Description: {forecast.weather[0].description}</p>
              <p className="humidity">Humidity: {forecast.main.humidity}%</p>
              <p className="wind">Wind Speed: {forecast.wind.speed}m/s</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div>{renderForecast()}</div>;
};

export default Forecast;
