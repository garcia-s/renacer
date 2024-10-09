"use client"
import styles from "./login.module.css"
import StyledButton from "../../../components/styled_button"
import { useState } from "react"
export default function Login() {

    const [loading, setLoading] = useState(false)

    return loading ?
        <div>Loading...</div>
        : <div className={styles.formWrapper}>
            <form className={styles.authForm}>
                <div className={styles.inputWrapper}>
                    <label>Email</label>
                    <input name="email" type="email" placeholder="example@example.com" />
                </div>

                <div className={styles.inputWrapper}>
                    <label>Contraseña</label>
                    <input name="password" type="password" placeholder="************" />
                </div>
                <StyledButton>Login</StyledButton>
                <div className={styles.others}>Ó</div>
                <div className={styles.buttons}>
                    <StyledButton type="button" onClick={() => {
                        setLoading(true)
                        setTimeout(() => {
                            setLoading(false)
                        }, 3000)
                    }}>Google</StyledButton>
                    <StyledButton>Facebook</StyledButton>
                </div>
            </form>
        </div >
}

