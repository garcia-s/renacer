import styles from './auth.module.css'

export const metadata = {
    title: "",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <main className={styles.auth}>{children}</main>
    );
}

