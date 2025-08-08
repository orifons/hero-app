import { AuthContext } from "@/auth/AuthContext";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext);

export default useAuth;
