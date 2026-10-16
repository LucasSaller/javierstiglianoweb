// Compila el panel de Tina y después la página.
// - Con credenciales de Tina Cloud (Vercel): build normal contra la nube.
//   Si la verificación de Tina Cloud falla (ej: rama todavía no indexada), reintenta sin esa
//   verificación para que la página se publique igual.
// - Sin credenciales (verificación en GitHub): compila en modo local.
import { execSync } from "node:child_process"

const ejecutar = (comando) => execSync(comando, { stdio: "inherit" })
const tieneTinaCloud = Boolean(process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN)

if (tieneTinaCloud) {
  console.log("[build] Tina Cloud configurado")
  try {
    ejecutar("tinacms build")
  } catch {
    console.warn("[build] La verificación de Tina Cloud falló; compilo el panel sin verificarla.")
    ejecutar("tinacms build --skip-cloud-checks")
  }
} else {
  console.log("[build] Tina Cloud NO configurado: compilo el panel en modo local")
  ejecutar("tinacms build --local --skip-indexing --skip-cloud-checks")
}

ejecutar("next build")
