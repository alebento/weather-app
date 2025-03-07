import React from "react";
import { useSelector } from "react-redux";

const WeatherCard = () => {
  const { data, loading, error } = useSelector((state) => state.weather);

  if (loading) return <span>🔄 Carregando...</span>;
  if (error) return <span>❌ Erro: {error}</span>;
  if (!data) return <span>⚠️ Pesquise por uma cidade ou utilize sua localização.</span>;

  return (
    <div className="card">
      <div className="card__title">🌍 {data.city}</div>
      <div><b>{data.description}</b></div>
      <div>🌡️ Temperatura: <b>{data.temperature}</b> <small>°C</small></div>
      <div>💧 Umidade Relativa do Ar: <b>{data.humidity}</b> <small>%</small></div>
      <div>🌬️ Velocidade do Vento: <b>{data.wind_speed}</b> <small>Km/h</small></div>
    </div>
  );
};

export default WeatherCard;
