import configureMockStore from "redux-mock-store";
import { setWeather } from "./weatherSlice";

const mockStore = configureMockStore();

test("A store pode modificar o estado do weather", () => {
  const store = mockStore({ weather: {} });

  const mockData = { city: "Curitiba", temperature: 18, description: "Nublado" };

  store.dispatch(setWeather(mockData));

  const actions = store.getActions();
  expect(actions[0].payload).toEqual(mockData);
});
