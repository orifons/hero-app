import { useReducer } from "react";
import { AuthContext } from "./auth/AuthContext.ts";
import { authReducer } from "./auth/authReducer.ts";
import { RouterApp } from "./routers/RouterApp.tsx";

const init = () => {
    const user = localStorage.getItem("user");
    return JSON.parse(user!) || { logged: false };
};

export const MainApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <RouterApp />
        </AuthContext.Provider>
    );
};
