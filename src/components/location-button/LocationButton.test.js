import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LocationButton from "./LocationButton";

const mockStore = configureStore([]);
const store = mockStore({});

describe("LocationButton", () => {
  beforeAll(() => {
    // 🔹 Mock da API de geolocalização do navegador
    global.navigator.geolocation = {
      getCurrentPosition: jest.fn().mockImplementation((success) =>
        success({
          coords: { latitude: -23.55052, longitude: -46.633308 },
        })
      ),
    };
  });

  test("Chama a função ao clicar no botão de localização", async () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <LocationButton onClick={mockFn} />
      </Provider>
    );

    const button = getByText(/Usar Minha Localização/i);
    
    // 🔹 Aguarda o clique e verificação do mock
    fireEvent.click(button);

    // 🔹 Aguarda que o mock seja chamado corretamente
    expect(global.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
});
