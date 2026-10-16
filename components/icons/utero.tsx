import type { SVGProps } from "react"

/** Ícono de útero en el mismo estilo de línea que lucide-react (24x24, stroke 2). */
export function UteroIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            {/* Cuerpo del útero */}
            <path d="M9 9.5C9 7.8 10.3 7 12 7s3 .8 3 2.5l-.6 5.2c-.2 1.4-1.1 2.3-2.4 2.3s-2.2-.9-2.4-2.3z" />
            {/* Cuello uterino */}
            <path d="M11 17v3h2v-3" />
            {/* Trompas */}
            <path d="M9.2 9C7.5 8.2 6.2 6.4 4.5 6.6" />
            <path d="M14.8 9c1.7-.8 3-2.6 4.7-2.4" />
            {/* Ovarios */}
            <circle cx="4.5" cy="10" r="1.6" />
            <circle cx="19.5" cy="10" r="1.6" />
        </svg>
    )
}
