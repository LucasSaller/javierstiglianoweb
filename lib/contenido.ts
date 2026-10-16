import { promises as fs } from "fs"
import path from "path"

/** Lo que necesita useTina: los datos, la consulta GraphQL y sus variables. */
export type ContenidoTina<TDatos> = {
    data: TDatos
    query: string
    variables: { relativePath: string }
}

type ConsultaTina<TDatos> = (variables: { relativePath: string }) => Promise<{
    data: TDatos
    query: string
}>

/**
 * Carga el contenido de una página.
 * - Con Tina Cloud configurado, lo pide a Tina (así funciona la edición visual en /admin).
 * - Si Tina Cloud no está configurado o falla, lee el JSON directo del repo,
 *   para que la página se publique igual.
 */
export async function cargarContenido<TDatos>(
    nombreColeccion: string,
    carpetaContenido: string,
    nombreArchivo: string,
    consultarTina: ConsultaTina<TDatos>,
): Promise<ContenidoTina<TDatos>> {
    const variables: { relativePath: string } = { relativePath: nombreArchivo }

    if (process.env.NEXT_PUBLIC_TINA_CLIENT_ID) {
        try {
            const respuesta = await consultarTina(variables)
            return { data: respuesta.data, query: respuesta.query, variables }
        } catch (errorTina: unknown) {
            console.warn(`[contenido] Tina no respondió para ${nombreColeccion}, uso el JSON local.`, errorTina)
        }
    }

    const rutaArchivo: string = path.join(process.cwd(), "content", carpetaContenido, nombreArchivo)
    const contenidoCrudo: unknown = JSON.parse(await fs.readFile(rutaArchivo, "utf-8"))
    return { data: { [nombreColeccion]: contenidoCrudo } as TDatos, query: "", variables }
}
