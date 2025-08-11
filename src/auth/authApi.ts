import { httpGet, httpPost, setAuthTokenGetter } from "@/api/axiosConfig";
import type { AuthResponse, LoginData, User } from "@/types";

const authApi = {
  signIn: async (credentials: LoginData): Promise<AuthResponse> => {
    const data = await httpPost<AuthResponse>(
      import.meta.env.VITE_LOGIN_ENDPOINT,
      credentials
    );

    localStorage.setItem("logged", JSON.stringify(true));
    localStorage.setItem("token", String(data.token));
    setAuthTokenGetter(() => localStorage.getItem("token"));

    return data;
  },

  signOut: () => {},

  getUser: async (): Promise<AuthResponse | null> => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = await httpGet<User>(import.meta.env.VITE_USER_ENDPOINT);
      return { user, token };
    } else {
      localStorage.removeItem("token");
      localStorage.setItem("logged", JSON.stringify(false));
      return null;
    }
  },
};

export default authApi;
