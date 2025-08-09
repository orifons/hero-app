import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";

// Configuración del token y callback externo para 401
let authTokenGetter: (() => string | null) | null = () =>
  typeof window !== "undefined" ? window.localStorage.getItem("token") : null;

let unauthorizedCallback: (() => void) | null = null;

// Base URL provista por Vite: define VITE_API_BASE_URL en .env
const baseURL: string = (import.meta)?.env?.VITE_API_BASE_URL ?? "/api";

// Instancia centralizada de Axios
export const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

// Interceptor de solicitud: añade Authorization si hay token
apiClient.interceptors.request.use(
  (config) => {
    const token = authTokenGetter ? authTokenGetter() : null;
    if (token) {
      (config.headers as Record<string, string>)['x-auth-token'] = token;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Interceptor de respuesta: propaga el error y actúa ante 401
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    if (status === 401 && typeof unauthorizedCallback === "function") {
      unauthorizedCallback();
    }
    return Promise.reject(error);
  }
);

// Permite establecer cómo obtener el token (por ejemplo, desde contexto)
export function setAuthTokenGetter(getter: (() => string | null) | null): void {
  authTokenGetter = getter;
}

// Permite establecer una acción al recibir 401 (logout/redirección)
export function setUnauthorizedHandler(cb: (() => void) | null): void {
  unauthorizedCallback = cb;
}

// Helpers typed para solicitudes comunes
export async function httpGet<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const res = await apiClient.get<T>(url, config);
  return res.data;
}

export async function httpPost<T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig): Promise<T> {
  const res = await apiClient.post<T>(url, body, config);
  return res.data;
}

export async function httpPut<T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig): Promise<T> {
  const res = await apiClient.put<T>(url, body, config);
  return res.data;
}

export async function httpPatch<T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig): Promise<T> {
  const res = await apiClient.patch<T>(url, body, config);
  return res.data;
}

export async function httpDelete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const res = await apiClient.delete<T>(url, config);
  return res.data;
}

export type ApiError = AxiosError & { response: AxiosError["response"] };

export default apiClient;
