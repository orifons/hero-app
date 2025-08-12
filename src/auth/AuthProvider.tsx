import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer, initialState } from "./authReducer";
import { auth_types } from "@/types";
import authApi from "./authApi";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const checkAuth = async () => {
      const logged = JSON.parse(localStorage.getItem("logged") || "false");
      const data = await authApi.getUser();
      try {
        if (logged && data) {
          dispatch({
            type: auth_types.signIn,
            payload: {
              user: data.user,
              token: data.token,
            },
          });
        }
      } finally {
        dispatch({
          type: "initialize",
          payload: {
            logged: logged,
            user: data?.user,
            token: data?.token,
          },
        });
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
