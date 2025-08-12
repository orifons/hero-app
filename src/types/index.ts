import type { User } from "@/interfaces/User.interface";

export const auth_types = {
  signIn: "[auth] signIn",
  logout: "[auth] logout",
  initialize: "initialize",
};

export type ActionTypes = {
  type: string;
  payload?: { user?: User; token?: string; logged?: boolean };
};

export type AuthState = {
  isInitialized: boolean;
  logged: boolean;
  user: User | undefined;
  token: string | undefined;
};

export type LoginData = {
  username: string;
  password: string;
};

export type AuthResponse = {
  token: string;
  user: User;
};
