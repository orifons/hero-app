import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer, initialState } from "./authReducer";
import { auth_types } from "@/types";
import authApi from "./authApi";

// const init = () => {
//   const user = localStorage.getItem("user");
//   return JSON.parse(user!) || { logged: false };
// };

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem("logged")!) || false;
    const checkAuth = async () => {
      const data = await authApi.getUser();

      if (logged && data) {
        dispatch({
          type: auth_types.signIn,
          payload: {
            user: data.user,
            token: data.token,
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
