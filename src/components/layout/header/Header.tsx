import styles from "./header.module.css"
import dataHead from "@/assets/locales/fr.json"

export default function Header() {

    return(<>
<header className={styles.header}>

    <section className = {styles.title}>
        <h1 className={styles.typing}>{dataHead.header.title} <span className={styles.sub}>{dataHead.header.subTitle}</span> <span className={styles.subTitle}>{dataHead.header.exp}</span></h1>
    </section>
</header>

    </>)
}