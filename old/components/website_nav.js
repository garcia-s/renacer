"use client"

import Link from "next/link"
import styles from "./website_nav.module.css"

export default function WebNav() {
    return <header className={styles.header}>
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="./sobre-nosotros">Sobre Nosotros</Link></li>
                <li><Link href="./nuestro-equipo">Nuestro Equipo</Link></li>
            </ul>
        </nav>
        <div>
            <button>
                IR A LA APP
            </button>
        </div>
    </header>
}
