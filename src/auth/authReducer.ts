import { auth_types as type } from "@/types/auth_types";

export const authReducer = (
    state = {},
    action: { type: string; payload?: object }
) => {
    switch (action.type) {
        case type.signIn:
            state = {
                ...action.payload,
                logged: true,
            };
            localStorage.setItem("user", JSON.stringify(state));

            return state;

        case type.logout:
            state = {
                logged: false,
            };
            localStorage.setItem("user", JSON.stringify(state));
            return state;

        default:
            return state;
    }
};
