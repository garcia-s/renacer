


import Link from "next/link"

export default function WebNav() {
    return <header>
        <nav>
            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="./sobre-nosotros">Sobre Nosotros</Link></li>
                <li><Link href="./nuestro-equipo">Nuestro Equipo</Link></li>
            </ul>
        </nav>
    </header>
}
