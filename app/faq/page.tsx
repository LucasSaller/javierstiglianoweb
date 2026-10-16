import client from "@/tina/__generated__/client"
import { PreguntasVista } from "@/components/paginas/preguntas-vista"
import { cargarContenido } from "@/lib/contenido"
import type { PreguntasQuery } from "@/tina/__generated__/types"

export default async function PaginaPreguntas() {
    const contenido = await cargarContenido<PreguntasQuery>("preguntas", "preguntas", "preguntas.json", client.queries.preguntas)
    return <PreguntasVista {...contenido} />
}
