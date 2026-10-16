import client from "@/tina/__generated__/client"
import { EspecialidadesVista } from "@/components/paginas/especialidades-vista"
import { cargarContenido } from "@/lib/contenido"
import type { EspecialidadesQuery } from "@/tina/__generated__/types"

export default async function PaginaEspecialidades() {
    const contenido = await cargarContenido<EspecialidadesQuery>("especialidades", "especialidades", "especialidades.json", client.queries.especialidades)
    return <EspecialidadesVista {...contenido} />
}
