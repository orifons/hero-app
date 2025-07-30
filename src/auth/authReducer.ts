import { auth_types as type } from "@/types/auth_types";

export const authReducer = (
    state = {},
    action: { type: string; payload?: object }
) => {
    switch (action.type) {
        case type.signIn:
            return {
                ...action.payload,
                logged: true,
            };

        case type.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }
};
