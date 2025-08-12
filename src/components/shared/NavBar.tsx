import { useAuth } from "@/hooks/useAuth";
import { auth_types } from "@/types";
import { LogOut, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

export const Navbar = () => {
  const {
    authState: { user },
    dispatch,
  } = useAuth();

  const handleLogout = () => {
    dispatch({
      type: auth_types.logout,
    });
    localStorage.setItem("logged", JSON.stringify(false));
    localStorage.removeItem("token");
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-4 shadow-md">
      <Link className="text-white text-2xl font-bold tracking-wide" to="/">
        Asociaciones
      </Link>

      <div className="flex space-x-4">
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`
          }
          to="/marvel"
        >
          Marvel
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`
          }
          to="/dc"
        >
          DC
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`
          }
          to="/search"
        >
          Search Hero
        </NavLink>
      </div>

      <div className="flex space-x-2">
        {
          user && (
            <>
              <Button className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-800 text-red-400">
                <User /> {`${user?.name}`}
              </Button>
              <Button className="hover:bg-red-400" onClick={handleLogout}>
                <LogOut /> Logout
              </Button>
            </>
          )
          // ) :
          // (
          //   <Button className="text-white text-shadow-white hover:bg-blue-400">
          //     <LogIn />
          //     <Link to="/login">Iniciar Sesion</Link>
          //   </Button>
          // )
        }
      </div>
    </nav>
  );
};
