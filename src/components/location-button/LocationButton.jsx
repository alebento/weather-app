import React from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherByCity } from "../../redux/weatherSlice";
import axios from "axios";

const API_URL = "http://localhost:5000/api/weather";

const LocationButton = () => {
  const dispatch = useDispatch();

  const getLocationAndFetchWeather = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${API_URL}?lat=${latitude}&lon=${longitude}`, {
              headers: { Authorization: `Bearer ${token}` },
            });

            dispatch(fetchWeatherByCity(response.data.city));
          } catch (error) {
            console.error("Erro ao obter previsão do tempo:", error);
          }
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
        }
      );
    } else {
      console.error("Geolocalização não suportada no navegador.");
    }
  };

  return <button onClick={getLocationAndFetchWeather}>📍 Usar Minha Localização</button>;
};

export default LocationButton;
