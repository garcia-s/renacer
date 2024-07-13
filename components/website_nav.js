"use client"
//PARA Pablito

import Link from "next/link"
import styles from "./website_nav.module.css"

export default function WebNav() {
    return <header>

        <div className={styles.navContainer}>
        <nav>
            <ul className={styles.ul}>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="./sobre-nosotros">Sobre Nosotros</Link></li>
                <li><Link href="./nuestro-equipo">Nuestro Equipo</Link></li>
            </ul>
        </nav>
        </div>
    </header>
}