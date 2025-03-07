import authReducer, { loginUser, logoutUser, registerUser } from "./authSlice";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

// Configuração do Mock Adapter para simular chamadas à API
const mock = new MockAdapter(axios);

// Estado inicial para os testes
const initialState = { user: null, token: null, error: null };

describe("AuthSlice", () => {
    beforeEach(() => {
        mock.reset(); // Reseta os mocks antes de cada teste
    });

    test("Deve atualizar o estado após login", () => {
        const action = {
            type: loginUser.fulfilled.type,
            payload: { user: { name: "John Doe" }, token: "token_123" },
        };

        const newState = authReducer(initialState, action);

        expect(newState.user).toEqual({ name: "John Doe" });
        expect(newState.token).toBe("token_123");
        expect(newState.error).toBeNull();
    });

    test("Deve limpar o estado após logout", () => {
        const stateWithUser = { user: { name: "John Doe" }, token: "token_123", error: null };

        const action = { type: logoutUser.fulfilled.type };

        const newState = authReducer(stateWithUser, action);

        expect(newState.user).toBeNull();
        expect(newState.token).toBeNull();
    });

    test("Deve atualizar o estado após registro bem-sucedido", async () => {
        const action = {
            type: registerUser.fulfilled.type,
            payload: { user: { name: "Usuário Teste" }, token: "token_123" },
        };

        const newState = authReducer(initialState, action);

        expect(newState.user).toEqual({ name: "Usuário Teste" });
        expect(newState.token).toBe("token_123");
        expect(newState.error).toBeNull();
    });

    test("Deve atualizar o erro ao falhar no registro", async () => {
        const action = {
            type: registerUser.rejected.type,
            payload: { error: "Email já cadastrado" },
        };

        const newState = authReducer(initialState, action);

        expect(newState.user).toBeNull();
        expect(newState.token).toBeNull();
        expect(newState.error).toBe("Email já cadastrado");
    });

    test("Deve atualizar o erro ao falhar no login", async () => {
        const action = {
            type: loginUser.rejected.type,
            payload: { error: "Credenciais inválidas" },
        };

        const newState = authReducer(initialState, action);

        expect(newState.user).toBeNull();
        expect(newState.token).toBeNull();
        expect(newState.error).toBe("Credenciais inválidas");
    });
});
