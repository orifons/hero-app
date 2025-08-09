/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
    readonly VITE_ENV: 'development' | 'production'
    // readonly VITE_TOKEN_NAME: string
    readonly VITE_LOGIN_ENDPOINT: string
    readonly VITE_LOGOUT_ENDPOINT: string
    readonly VITE_USER_ENDPOINT: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}