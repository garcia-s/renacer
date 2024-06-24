import styles from "./login.module.css"

export default function Login() {
    return <div className={styles.formWrapper}>
        <form className={styles.authForm}>
            <div className={styles.inputWrapper}>
                <label>Email</label>
                <input name="email" type="email" placeholder="example@example.com" />
            </div>

            <div className={styles.inputWrapper}>
                <label>Contraseña</label>
                <input name="password" type="password" placeholder="************" />
            </div>
            <button>Login</button>
            <div class={styles.others}>Ó</div>
            <div className={styles.buttons}>
                <button>Google</button>
                <button>Facebook</button>
            </div>
        </form>
    </div >
}


