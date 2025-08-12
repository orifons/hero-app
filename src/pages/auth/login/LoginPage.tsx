import authApi from "@/auth/authApi";
import { Button } from "@/components/ui/button.tsx";
import { useAuth } from "@/hooks/useAuth";
import { auth_types } from "@/types";
import { LogIn } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const handleOnChange = ({ target }: { target: HTMLInputElement }) => {
    const { name, value } = target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { token, user } = await authApi.signIn(loginForm);

    dispatch({
      type: auth_types.signIn,
      payload: { user, token },
    });

    const pathRedirect = localStorage.getItem("lastPage") || "/";

    navigate(pathRedirect, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md flex flex-col gap-8"
      >
        <div className="flex flex-col items-center gap-2">
          {/* Logo o icono */}
          <div className="p-4 rounded-full mb-2">
            <img className="w-fit" src="/superheroe.png" alt="Marvel Captain" />
          </div>
          <h1 className="text-3xl font-bold text-indigo-700">Iniciar Sesión</h1>
          <p className="text-gray-400 text-sm">
            Bienvenido de nuevo, por favor ingresa tus datos
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400"></span>
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              autoComplete="off"
              value={loginForm.username}
              onChange={handleOnChange}
              required
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400"></span>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              autoComplete="off"
              value={loginForm.password}
              onChange={handleOnChange}
              required
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition"
        >
          <LogIn /> Acceder
        </Button>
      </form>
    </div>
  );
};
