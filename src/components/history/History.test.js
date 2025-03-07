import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../../redux/weatherSlice";
import History from "./History";
import { TextEncoder, TextDecoder } from 'util';
import "@testing-library/jest-dom";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

describe("History Component", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { weather: weatherReducer },
    });
  });

  test("Renderiza a mensagem de 'Nenhuma busca recente' quando não há histórico", () => {
    render(
      <Provider store={store}>
        <History />
      </Provider>
    );
  
    expect(screen.queryByText((content) => content.includes("Nenhuma busca recente"))).toBeInTheDocument();
  });  

  test("Renderiza histórico de buscas corretamente", () => {
    store = configureStore({
      reducer: {
        weather: () => ({
          history: [
            { city: "São Paulo", weather: { temperature: 28, description: "Ensolarado", wind_speed: 2, humidity: 60 } },
            { city: "Rio de Janeiro", weather: { temperature: 30, description: "Parcialmente nublado", wind_speed: 3, humidity: 70 } },
          ],
        }),
      },
    });

    render(
      <Provider store={store}>
        <History />
      </Provider>
    );

    expect(screen.getByText(/São Paulo/i)).toBeInTheDocument();
    expect(screen.getByText(/Rio de Janeiro/i)).toBeInTheDocument();
  });
});
