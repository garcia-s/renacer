'use client'
import styles from "./styled_button.module.css"

export default function StyledButton({ children, onClick, type }) {
    return <button className={styles.button} onClick={onClick}
        type={type}>
        {children}
    </button>
}

//comentario 2