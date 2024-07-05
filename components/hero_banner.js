import Image from "next/image"
import doggo from "/public/pexels-blue-15701898.jpg"
import Link from "next/link"
import styles from "./hero_banner.module.css"
import InteractiveBackground from "./interactive_background"


export default function HeroBanner() {


    return <InteractiveBackground>
        <div className={styles.hero}>


            <div className={styles.left}>
                <div className={styles.leftContainer}>
                    <h2 className={styles.title}>Un Hogar</h2>
                    <h3 className={styles.subtitle}>Para quien mas lo necesita</h3>
                    <h3 className={styles.decoration}>Conectando Coolaboradores, Organizaciones y Rescatistas</h3>
                    <Link href="./app" className={styles.action}>
                        DESCUBRIR
                    </Link>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.doggoScreen}>
                    <Image
                        src={doggo}
                        width={500}
                        height={500} />
                </div>
            </div>
        </div>
    </InteractiveBackground>
}

