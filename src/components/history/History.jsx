import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory } from "../../redux/weatherSlice";

const History = () => {
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{color: 'rgb(93, 95, 117)'}}>📜 Últimas 5 Pesquisas</h1>
      {history.length === 0 ? (
        <p>⚠️ Nenhuma busca recente.</p>
      ) : (
        <div>
          {history.slice(0, 5).map((item, index) => (
            <div className="card" key={index}>
              <div className="card__title">🌍 {item.city} - 🌡️ {item.weather.temperature}°C</div>
              <div><b>{item.weather.description}</b></div>
              <div>💧 Umidade Relativa do Ar: <b>{item.weather.humidity}</b> <small>%</small></div>
              <div>🌬️ Velocidade do Vento: <b>{item.weather.wind_speed}</b> <small>Km/h</small></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
