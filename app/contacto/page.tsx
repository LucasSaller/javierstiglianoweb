import client from "@/tina/__generated__/client"
import { ContactoVista } from "@/components/paginas/contacto-vista"
import { cargarContenido } from "@/lib/contenido"
import type { ContactoQuery, SitioQuery } from "@/tina/__generated__/types"

export default async function PaginaContacto() {
    const [contenidoContacto, contenidoSitio] = await Promise.all([
        cargarContenido<ContactoQuery>("contacto", "contacto", "contacto.json", client.queries.contacto),
        cargarContenido<SitioQuery>("sitio", "sitio", "datos.json", client.queries.sitio),
    ])
    return <ContactoVista contacto={contenidoContacto} sitio={contenidoSitio} />
}
