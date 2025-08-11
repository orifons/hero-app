import AuthProvider from "./auth/AuthProvider.tsx";
import { RouterApp } from "./routers/RouterApp.tsx";

export const MainApp = () => {
  return (
    <AuthProvider>
      <RouterApp />
    </AuthProvider>
  );
};
