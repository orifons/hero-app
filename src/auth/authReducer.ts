import { auth_types as type, type ActionTypes, type AuthState } from "@/types";

export const authReducer = (
  state: AuthState,
  action: ActionTypes
): AuthState => {
  switch (action.type) {
    case type.signIn:
      return {
        ...state,
        logged: true,
        user: action.payload?.user,
        token: action.payload?.token,
      };

    case type.logout:
      return {
        ...state,
        logged: false,
        user: undefined,
        token: undefined,
      };
    case "initialize":
      return {
        ...state,
        isInitialized: true,
        user: action.payload?.user,
        token: action.payload?.token,
      };

    default:
      return state;
  }
};

export const initialState = {
  isInitialized: false,
  logged: false,
  user: undefined,
  token: undefined,
};
