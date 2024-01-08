import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherForecast({ city }) {
  const [weatherForecast, setWeatherForecast] = useState({});
  const [filter, setFilter] = useState("day");

  useEffect(() => {
    const apiKey = "60c907d8676c855bf7c4154744fb0dcf ";
    // const city = "New York";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setWeatherForecast(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  function filterForecastData(filter) {
    if (filter === "hour") {
      // Return the weather forecast data by hour
      return weatherForecast.list || [];
    } else {
      // Return the weather forecast data by day
      const dailyData = [];
      let currentDay = null;

      (weatherForecast.list || []).forEach((item) => {
        const date = new Date(item.dt_txt);
        const day = date.getDate();

        if (day !== currentDay) {
          currentDay = day;
          dailyData.push({
            date: date.toDateString(),
            data: [item],
          });
        } else {
          dailyData[dailyData.length - 1].data.push(item);
        }
      });

      return dailyData;
    }
  }

  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast__buttons">
        <button
          className={`WeatherForecast__button ${
            filter === "hour" ? "active" : ""
          }`}
          onClick={() => setFilter("day")}
        >
          Daily
        </button>
        <button
          className={`WeatherForecast__button ${
            filter === "day" ? "active" : ""
          }`}
          onClick={() => setFilter("hour")}
        >
          Hourly
        </button>
      </div>
      <div className="WeatherForecast__list">
        {filter === "hour" ? (
          <ul>
            {(weatherForecast.list || []).slice(0, 10).map((item) => (
              <li key={item.dt} className="WeatherForecast__listItem">
                {new Date(item.dt_txt).toLocaleTimeString()} -{" "}
                {item.weather[0].description} - {item.main.temp}°C
              </li>
            ))}
          </ul>
        ) : (
          <ul className="u">
            {filterForecastData("day")
              .slice(0, 4)
              .map((item) => (
                <li key={item.date} className="WeatherForecast__listItem">
                  <h3>{item.date}</h3>
                  <ul>
                    {item.data.map((subItem) => (
                      <li key={subItem.dt}>
                        {new Date(subItem.dt_txt).toLocaleTimeString()} -{" "}
                        {subItem.weather[0].description} - {subItem.main.temp}°C
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WeatherForecast;
