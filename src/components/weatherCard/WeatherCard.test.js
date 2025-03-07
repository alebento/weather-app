import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherCard from "./WeatherCard";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import '@testing-library/jest-dom';

test("Exibe mensagem quando não há dados", () => {
  render(
    <Provider store={store}>
      <WeatherCard />
    </Provider>
  );
  expect(screen.getByText("⚠️ Pesquise por uma cidade ou utilize sua localização.")).toBeInTheDocument();
});
