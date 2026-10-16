import { defineConfig, type Collection, type TinaField } from "tinacms"

/**
 * Configuración del panel de edición (/admin).
 * Cada "colección" es una página del sitio con un único documento JSON en /content.
 * Los nombres de campo (name) tienen que coincidir con las claves de los JSON.
 */

const ramaGit: string =
    process.env.NEXT_PUBLIC_TINA_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.GITHUB_HEAD_REF ||
    process.env.GITHUB_REF_NAME ||
    "main"

const OPCIONES_ICONO: { value: string; label: string }[] = [
    { value: "lazo", label: "Lazo rosa (cáncer de mama)" },
    { value: "utero", label: "Útero" },
    { value: "escudo", label: "Escudo" },
    { value: "medalla", label: "Medalla" },
    { value: "manos", label: "Manos (trato humano)" },
    { value: "estetoscopio", label: "Estetoscopio" },
]

const OPCIONES_COLOR: { value: string; label: string }[] = [
    { value: "principal", label: "Color principal" },
    { value: "secundario", label: "Color secundario" },
]

/** Campo de texto corto. */
const texto = (name: string, label: string, description?: string): TinaField => ({
    type: "string", name, label, description,
})

/** Campo de texto largo (párrafo). */
const parrafo = (name: string, label: string, description?: string): TinaField => ({
    type: "string", name, label, description, ui: { component: "textarea" },
})

/** Lista de textos (viñetas). */
const listaTextos = (name: string, label: string, description?: string): TinaField => ({
    type: "string", name, label, description, list: true,
})

const encabezado: TinaField = {
    type: "object",
    name: "encabezado",
    label: "Encabezado de la página",
    fields: [texto("titulo", "Título"), parrafo("subtitulo", "Texto debajo del título")],
}

/** Opciones comunes a todas las colecciones: un único documento, sin crear ni borrar. */
const documentoUnico = (ruta: string) => ({
    format: "json" as const,
    ui: {
        allowedActions: { create: false, delete: false },
        router: () => ruta,
    },
})

const sitio: Collection = {
    name: "sitio",
    label: "Datos generales (contacto, consultorios)",
    path: "content/sitio",
    ...documentoUnico("/contacto"),
    fields: [
        texto("nombre", "Nombre", "Cómo aparece en el encabezado y el pie de página."),
        texto("especialidadCorta", "Especialidad (debajo del nombre)"),
        texto("whatsapp", "Número de WhatsApp", "Con código de país, sin espacios ni +. Ejemplo: 5491130246736"),
        texto("email", "Email de contacto"),
        texto("instagram", "Usuario de Instagram", "Sin la @. Ejemplo: doctorstigliano"),
        texto("urlTurnosOnline", "Link de turnos online (DrApp)"),
        {
            type: "object",
            name: "consultorios",
            label: "Consultorios",
            list: true,
            ui: { itemProps: (item: Record<string, string>) => ({ label: item?.nombre || "Consultorio" }) },
            fields: [
                texto("nombre", "Nombre", "Ejemplo: Consultorio Haedo"),
                texto("direccion", "Dirección"),
                texto("localidad", "Localidad"),
                texto("horario", "Días y horario", "Ejemplo: Jueves: 14:00 - 18:00 hs"),
                texto("telefono", "Teléfono"),
            ],
        },
        parrafo("descripcionPie", "Descripción en el pie de página"),
        parrafo("avisoLegal", "Aviso al final de la página"),
    ],
}

const inicio: Collection = {
    name: "inicio",
    label: "Inicio",
    path: "content/inicio",
    ...documentoUnico("/"),
    fields: [
        {
            type: "object", name: "portada", label: "Portada (parte de arriba)",
            fields: [
                texto("etiqueta", "Etiqueta chica arriba del título"),
                texto("tituloAntes", "Título: primera parte"),
                texto("tituloDestacado", "Título: palabra en color"),
                texto("tituloDespues", "Título: última parte"),
                parrafo("subtitulo", "Texto debajo del título"),
                texto("botonPrincipal", "Texto del botón de turnos"),
                texto("botonSecundario", "Texto del botón 'Conocer al doctor'"),
            ],
        },
        {
            type: "object", name: "credenciales", label: "Recuadros debajo de la portada", list: true,
            ui: { itemProps: (item: Record<string, string>) => ({ label: item?.titulo || "Recuadro" }) },
            fields: [
                { type: "string", name: "icono", label: "Ícono", options: OPCIONES_ICONO },
                texto("titulo", "Título"),
                texto("subtitulo", "Subtítulo"),
            ],
        },
        {
            type: "object", name: "areas", label: "Áreas de atención",
            fields: [
                texto("titulo", "Título"),
                parrafo("texto", "Texto"),
                {
                    type: "object", name: "tarjetas", label: "Tarjetas", list: true,
                    ui: { itemProps: (item: Record<string, string>) => ({ label: item?.titulo || "Tarjeta" }) },
                    fields: [
                        { type: "string", name: "icono", label: "Ícono", options: OPCIONES_ICONO },
                        { type: "string", name: "color", label: "Color", options: OPCIONES_COLOR },
                        texto("titulo", "Título"),
                        texto("subtitulo", "Subtítulo"),
                        listaTextos("puntos", "Puntos de la lista"),
                        texto("enlace", "Link de 'Saber más'", "No hace falta cambiarlo."),
                    ],
                },
            ],
        },
        {
            type: "object", name: "trayectoria", label: "Trayectoria (con foto)",
            fields: [
                { type: "image", name: "foto", label: "Foto" },
                texto("titulo", "Título"),
                parrafo("parrafoDestacado", "Primer párrafo"),
                parrafo("parrafo", "Segundo párrafo"),
                texto("boton", "Texto del botón"),
            ],
        },
        {
            type: "object", name: "llamado", label: "Recuadro final (turnos)",
            fields: [
                texto("titulo", "Título"),
                parrafo("texto", "Texto"),
                texto("ubicaciones", "Lugares de atención"),
                texto("botonTurno", "Texto del botón de turnos"),
                texto("botonWhatsapp", "Texto del botón de WhatsApp"),
            ],
        },
    ],
}

const especialidades: Collection = {
    name: "especialidades",
    label: "Especialidades",
    path: "content/especialidades",
    ...documentoUnico("/especialidades"),
    fields: [
        encabezado,
        {
            type: "object", name: "especialidades", label: "Especialidades", list: true,
            ui: { itemProps: (item: Record<string, string>) => ({ label: item?.titulo || "Especialidad" }) },
            fields: [
                texto("titulo", "Título"),
                { type: "string", name: "icono", label: "Ícono", options: OPCIONES_ICONO },
                { type: "string", name: "color", label: "Color", options: OPCIONES_COLOR },
                parrafo("descripcion", "Descripción"),
                {
                    type: "object", name: "desplegables", label: "Secciones desplegables", list: true,
                    ui: { itemProps: (item: Record<string, string>) => ({ label: item?.titulo || "Sección" }) },
                    fields: [
                        texto("titulo", "Título (lo que se ve cerrado)"),
                        parrafo("texto", "Texto", "Opcional si usás la lista de puntos."),
                        listaTextos("puntos", "Lista de puntos", "Opcional si usás el texto."),
                    ],
                },
                texto("ancla", "Identificador", "No cambiar: lo usan los links de 'Saber más'."),
            ],
        },
        {
            type: "object", name: "llamado", label: "Botón final",
            fields: [texto("titulo", "Título"), texto("boton", "Texto del botón")],
        },
    ],
}

const sobreMi: Collection = {
    name: "sobreMi",
    label: "Sobre el doctor",
    path: "content/sobre-mi",
    ...documentoUnico("/sobre-mi"),
    fields: [
        encabezado,
        { type: "image", name: "foto", label: "Foto" },
        parrafo("cita", "Frase destacada"),
        { type: "rich-text", name: "bio", label: "Presentación" },
        {
            type: "object", name: "cargos", label: "Cargos actuales", list: true,
            ui: { itemProps: (item: Record<string, string>) => ({ label: item?.institucion || "Institución" }) },
            fields: [
                texto("institucion", "Institución"),
                { type: "string", name: "estilo", label: "Color", options: OPCIONES_COLOR },
                listaTextos("puestos", "Cargos"),
            ],
        },
        {
            type: "object", name: "formacion", label: "Formación académica", list: true,
            ui: { itemProps: (item: Record<string, string>) => ({ label: item?.titulo || "Título" }) },
            fields: [texto("titulo", "Título"), texto("institucion", "Institución")],
        },
        {
            type: "object", name: "distinciones", label: "Distinciones", list: true,
            ui: { itemProps: (item: Record<string, string>) => ({ label: item?.titulo || "Distinción" }) },
            fields: [
                texto("titulo", "Distinción"),
                texto("detalle", "Detalle (quién la otorgó, año)"),
                { type: "boolean", name: "destacada", label: "Resaltar en dorado" },
            ],
        },
    ],
}

const preguntas: Collection = {
    name: "preguntas",
    label: "Preguntas frecuentes",
    path: "content/preguntas",
    ...documentoUnico("/faq"),
    fields: [
        encabezado,
        {
            type: "object", name: "preguntas", label: "Preguntas", list: true,
            ui: { itemProps: (item: Record<string, string>) => ({ label: item?.pregunta || "Pregunta" }) },
            fields: [
                texto("pregunta", "Pregunta"),
                { type: "rich-text", name: "respuesta", label: "Respuesta" },
            ],
        },
        {
            type: "object", name: "cierre", label: "Recuadro final",
            fields: [texto("titulo", "Título"), parrafo("texto", "Texto"), texto("boton", "Texto del botón")],
        },
    ],
}

const contacto: Collection = {
    name: "contacto",
    label: "Contacto",
    path: "content/contacto",
    ...documentoUnico("/contacto"),
    fields: [
        encabezado,
        {
            type: "object", name: "turnosOnline", label: "Recuadro de turnos online",
            fields: [texto("etiqueta", "Etiqueta"), texto("titulo", "Título"), parrafo("texto", "Texto"), texto("boton", "Texto del botón"), texto("nota", "Nota chica")],
        },
        {
            type: "object", name: "whatsapp", label: "Recuadro de WhatsApp",
            fields: [texto("titulo", "Título"), parrafo("texto", "Texto"), texto("boton", "Texto del botón"), texto("nota", "Nota chica")],
        },
        {
            type: "object", name: "formulario", label: "Formulario de mensaje",
            fields: [texto("titulo", "Título"), listaTextos("motivos", "Motivos de consulta")],
        },
        texto("tituloConsultorios", "Título de la lista de consultorios", "Los consultorios se editan en 'Datos generales'."),
        texto("textoInstagram", "Texto del link de Instagram"),
        parrafo("avisoSinTurno", "Aviso importante"),
    ],
}

export default defineConfig({
    branch: ramaGit,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
    token: process.env.TINA_TOKEN || null,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "imagenes",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [inicio, especialidades, sobreMi, preguntas, contacto, sitio],
    },
})
