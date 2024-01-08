import React from "react";
import WeatherApp from "./components/WeatherApp";
import { Router, Routes, Route, Switch, BrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WeatherApp />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
