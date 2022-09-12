import { useSharedData } from "./sharedDataHook";

export const todoList = {
    data: [
        { id: 1, note: "test note 1" },
        { id: 2, note: "test note 2" }
    ]
};

export const authState = {
    data: {
        loggedIn: false,
        userName: "asanga"
    }
};

export const useTodoList = () => useSharedData(todoList, "todolist");

export const useAuthState = () => useSharedData(authState, "authState");
