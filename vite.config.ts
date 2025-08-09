import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//     plugins: [react(), tailwindcss()],
//     define: {
//         'process.env': {},
//         __APP_ENV__: JSON.stringify(mode),
//       },
//     resolve: {
//         alias: {
//             "@": path.resolve(__dirname, "./src"),
//         },
//     },
// });


export default defineConfig(({ mode }) => ({
    plugins: [react(), tailwindcss()],
    define: {
        'process.env': {},
        __APP_ENV__: JSON.stringify(mode),
      },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
  }))