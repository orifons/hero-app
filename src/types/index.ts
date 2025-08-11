export const auth_types = {
  signIn: "[auth] signIn",
  logout: "[auth] logout",
};

export type ActionTypes = {
  type: string;
  payload?: { user: User; token: string; logged?: boolean };
};

export type AuthState = {
  isInitialized: boolean;
  logged: boolean;
  user: User | undefined;
  token: string | undefined;
};

export interface User {
  _id?: string;
  username: string;
  email: string;
  createdAt?: Date;
  name: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
