import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El panel de edición de Tina se compila en /public/admin; /admin lleva a su index.html
  async redirects() {
    return [{ source: "/admin", destination: "/admin/index.html", permanent: false }];
  },
};

export default nextConfig;
