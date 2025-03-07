import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherByCity } from "../redux/weatherSlice";
import WeatherCard from "../components/weatherCard/WeatherCard";
import LocationButton from "../components/location-button/LocationButton";
import History from "../components/history/History";

const Home = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="home-container">
      <div className="home-container__column">
        <h1 className="home-title">Busca Rápida</h1>
        <LocationButton
          onLocation={(lat, lon) => {
            console.info("Dados recebidos >>> Lat:", lat, "Lon:", lon);
          }}
        />
        <h1 className="home-title">Busca por Cidade</h1>
        <div style={{ display: 'flex'}}>
          <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Digite a cidade" />
          <button onClick={() => dispatch(fetchWeatherByCity(city))}>Buscar</button>
        </div>
        <h1 className="home-title">Resultado da Busca</h1>
        <WeatherCard />
      </div>
      <div className="home-container__column">
        <History />
      </div>
    </div>
  );
};

export default Home;
