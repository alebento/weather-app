import weatherReducer, { setWeather, fetchWeatherByCity, fetchHistory } from "./weatherSlice";

describe("weatherSlice", () => {
    test("Deve armazenar os dados do clima ao chamar setWeather", () => {
        const mockData = { city: "São Paulo", temperature: 25, description: "Chuva" };
        const initialState = { data: null, history: [], loading: false, error: null };

        const action = setWeather(mockData);
        const newState = weatherReducer(initialState, action);

        expect(newState.data).toEqual(mockData);
    });

    test("Deve iniciar o carregamento ao chamar fetchWeatherByCity.pending", () => {
        const initialState = { data: null, history: [], loading: false, error: null };

        const action = { type: fetchWeatherByCity.pending.type };
        const newState = weatherReducer(initialState, action);

        expect(newState.loading).toBe(true);
        expect(newState.error).toBeNull();
    });

    test("Deve armazenar os dados do clima ao chamar fetchWeatherByCity.fulfilled", () => {
        const mockData = { city: "Rio de Janeiro", temperature: 30, description: "Sol" };
        const initialState = { data: null, history: [], loading: true, error: null };

        const action = { type: fetchWeatherByCity.fulfilled.type, payload: mockData };
        const newState = weatherReducer(initialState, action);

        expect(newState.loading).toBe(false);
        expect(newState.data).toEqual(mockData);
    });

    test("Deve salvar o erro no estado ao chamar fetchWeatherByCity.rejected", () => {
        const mockError = "Erro ao buscar dados";
        const initialState = { data: null, history: [], loading: true, error: null };

        const action = { type: fetchWeatherByCity.rejected.type, payload: mockError };
        const newState = weatherReducer(initialState, action);

        expect(newState.loading).toBe(false);
        expect(newState.error).toEqual(mockError);
    });

    test("Deve armazenar os dados do histórico ao chamar fetchHistory.fulfilled", () => {
        const mockHistory = [
            { city: "São Paulo", temperature: 25, description: "Nublado" },
            { city: "Curitiba", temperature: 20, description: "Chuvoso" }
        ];
        const initialState = { data: null, history: [], loading: false, error: null };

        const action = { type: fetchHistory.fulfilled.type, payload: mockHistory };
        const newState = weatherReducer(initialState, action);

        expect(newState.history).toEqual(mockHistory);
    });
});
