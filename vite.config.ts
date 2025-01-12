import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());

  const port = +env.VITE_PORT;
  const host = env.VITE_HOST;

  return defineConfig({
    plugins: [react()],
    server: {
      host,
      port,
    },
  });
};
