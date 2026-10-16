import client from "@/tina/__generated__/client"
import { InicioVista } from "@/components/paginas/inicio-vista"
import { cargarContenido } from "@/lib/contenido"
import type { InicioQuery } from "@/tina/__generated__/types"

export default async function PaginaInicio() {
  const contenido = await cargarContenido<InicioQuery>("inicio", "inicio", "inicio.json", client.queries.inicio)
  return <InicioVista {...contenido} />
}
