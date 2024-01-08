import React from "react";

function WeatherCard({ weatherData }) {
  const { name, main, weather } = weatherData;

  return (
    <div>
      <h2>Weather in {name}</h2>
      <div>
        <h1>{Math.round(main.temp)}°C</h1>
        <p className="desc">{weather[0].main}</p>
        <div className="temp">Feels like {Math.round(main.feels_like)}°C</div>
        <div>Humidity: {main.humidity}%</div>
      </div>
    </div>
  );
}

export default WeatherCard;
