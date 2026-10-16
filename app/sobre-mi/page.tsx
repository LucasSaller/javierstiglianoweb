import client from "@/tina/__generated__/client"
import { SobreMiVista } from "@/components/paginas/sobre-mi-vista"
import { cargarContenido } from "@/lib/contenido"
import type { SobreMiQuery } from "@/tina/__generated__/types"

export default async function PaginaSobreMi() {
    const contenido = await cargarContenido<SobreMiQuery>("sobreMi", "sobre-mi", "sobre-mi.json", client.queries.sobreMi)
    return <SobreMiVista {...contenido} />
}
