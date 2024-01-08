import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function CitySearch({ onCitySelected }) {
  const [searchParams, setsearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (inputValue) {
      const API_KEY = "60c907d8676c855bf7c4154744fb0dcf";
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSuggestions(data);
          setShowSuggestions(true);
        })
        .catch((error) => console.error(error));
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSuggestionClick = (city) => {
    setInputValue(city.name);
    setShowSuggestions(false);
    onCitySelected(city);
    setsearchParams({ q: city.name, lat: city.lat, lon: city.lon });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue) {
      const matchingCity = suggestions.find(
        (city) => city.name.toLowerCase() === inputValue.toLowerCase()
      );
      console.log(matchingCity);
      if (matchingCity) {
        setError(false);
        onCitySelected(matchingCity);
        setsearchParams({
          q: matchingCity.name,
          lat: matchingCity.lat,
          lon: matchingCity.lon,
        });
      } else {
        setError(true);
        setShowSuggestions(false);
      }
    }
  };

  return (
    <div className="city-search">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="city-search-input"
          placeholder="Search"
        />
        {error && <div className="error">Sorry, no results found</div>}
        <button type="submit" className="city-search-button">
          Go
        </button>
      </form>

      {showSuggestions && (
        <ul className="city-search-suggestions">
          {suggestions.map((city, index) => (
            <li
              className="city-search-suggestion"
              key={index}
              onClick={() => handleSuggestionClick(city)}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
      {/* {coord && <Map location={coord} />} */}
    </div>
  );
}

export default CitySearch;
