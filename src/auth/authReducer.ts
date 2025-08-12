import { auth_types as type, type ActionTypes, type AuthState } from "@/types";

export const authReducer = (
  state: AuthState,
  action: ActionTypes
): AuthState => {
  switch (action.type) {
    case type.startLoading:
      return {
        ...state,
        isLoading: true,
      };

    case type.signIn:
      return {
        ...state,
        logged: true,
        isLoading: false,
        user: action.payload?.user,
        token: action.payload?.token,
      };

    case type.logout:
      return {
        ...state,
        logged: false,
        isLoading: false,
        user: undefined,
        token: undefined,
      };

    case type.initialize:
      return {
        ...state,
        isInitialized: true,
        isLoading: false,
        logged: action.payload?.logged || false,
        user: action?.payload?.user,
        token: action?.payload?.token,
      };

    default:
      return state;
  }
};

export const initialState: AuthState = {
  isInitialized: false,
  logged: false,
  isLoading: true,
  user: undefined,
  token: undefined,
};
