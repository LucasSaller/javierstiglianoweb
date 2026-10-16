import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El panel de edición de Tina se compila en /public/admin; /admin abre su index.html
  async rewrites() {
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },
};

export default nextConfig;
