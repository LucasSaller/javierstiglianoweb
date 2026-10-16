// Compila el panel de Tina y después la página.
// Con credenciales de Tina Cloud (Vercel) usa la nube; sin ellas (verificación en GitHub) compila en modo local.
import { execSync } from "node:child_process"

const tieneTinaCloud = Boolean(process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN)
const comandoTina = tieneTinaCloud ? "tinacms build" : "tinacms build --local --skip-indexing --skip-cloud-checks"

console.log(`[build] Tina Cloud ${tieneTinaCloud ? "configurado" : "NO configurado (modo local)"}: ${comandoTina}`)
execSync(comandoTina, { stdio: "inherit" })
execSync("next build", { stdio: "inherit" })
