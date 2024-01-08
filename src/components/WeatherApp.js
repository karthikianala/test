import React, { useState, useEffect } from "react";
import { getdata } from "./Fetch";
import Loading from "./Loading";
import CitySearch from "./CitySearch";
import WeatherCard from "./WeatherCard";
import { useSearchParams } from "react-router-dom";
import Forecast from "./Forecast";
import Map from "./Maps";

function WeatherApp() {
  const [selectedCity, setSelectedCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const [coord, setcoord] = useState(null);

  useEffect(() => {
    console.log(coord);
  }, [coord]);

  useEffect(() => {
    const city = searchParams.get("q");
    if (!city) {
      setLoading(true);
      setSelectedCity(city);
      setcoord(null);
    }
    if (city) {
      const l = parseFloat(searchParams.get("lat"));

      const lo = parseFloat(searchParams.get("lon"));
      if (city !== selectedCity) {
        console.log(city);
        setSelectedCity(city);
        setLoading(true);
        setcoord({ lat: l, lon: lo });
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedCity) {
      console.log("selected");
      setLoading(true);
      setError(null);
      const API_KEY = "60c907d8676c855bf7c4154744fb0dcf";
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${API_KEY}`;
      async function fetchData(API_URL) {
        try {
          const data = await getdata(API_URL);
          setWeatherData(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      }
      fetchData(API_URL);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("not");
          setLoading(true);
          setError(null);
          const API_KEY = "60c907d8676c855bf7c4154744fb0dcf";
          const API_URL = searchParams.get("q")
            ? `https://api.openweathermap.org/data/2.5/weather?q=${searchParams.get(
                "q"
              )}&appid=${API_KEY}&units=metric`
            : `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

          async function fetchData(API_URL) {
            try {
              const data = await getdata(API_URL);
              setWeatherData(data);
              setLoading(false);
            } catch (error) {
              setError(error.message);
              setLoading(false);
            }
          }
          fetchData(API_URL);
        },
        (error) => {
          setError("Unable to get location data");
        }
      );
    }
  }, [selectedCity]);

  const handleCitySelected = (city) => {
    setSelectedCity(city.name);
    setcoord({ lat: city.lat, lon: city.lon });
  };

  if (error == "Unable to get location data") {
    return (
      <div>
        <div className="error">{error}</div>
        <CitySearch onCitySelected={handleCitySelected} />
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="a">
        <div className="app-container">
          <div className="weather-app-container">
            <div>{error}</div>
            <CitySearch onCitySelected={handleCitySelected} />
            {weatherData && <WeatherCard weatherData={weatherData} />}
          </div>
        </div>
        {coord && <Map latitude={coord.lat} longitude={coord.lon} />}
      </div>
      <div>{selectedCity && <Forecast city={selectedCity} />}</div>
    </div>
  );
}

export default WeatherApp;
