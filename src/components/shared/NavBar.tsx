import { AuthContext } from "@/auth/AuthContext";
import { auth_types } from "@/types/auth_types";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { LogIn, LogOut, User } from "lucide-react";

export const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({
            type: auth_types.logout,
        });
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-4 shadow-md">
            <Link
                className="text-white text-2xl font-bold tracking-wide"
                to="/"
            >
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
                {user.logged ? (
                    <>
                        <Button className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-800 text-red-400">
                            <User /> {`${user.first_name} ${user.last_name}`}
                        </Button>
                        <Button
                            className="hover:bg-red-400"
                            onClick={handleLogout}
                        >
                            <LogOut /> Logout
                        </Button>
                    </>
                ) : (
                    <Button className="text-white text-shadow-white hover:bg-blue-400">
                        <LogIn />
                        <Link to="/login">Iniciar Sesion</Link>
                    </Button>
                )}
            </div>
        </nav>
    );
};
