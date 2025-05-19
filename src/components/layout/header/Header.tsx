import styles from "./header.module.css"

export default function Header() {

    return(<>
<header className={styles.header}>

    <section className = {styles.title}>
        <h1 className={styles.typing}>DEVELOPPEUR <span className={styles.sub}>FULL STACK</span> <span className={styles.subTitle}>junior...</span></h1>
    </section>
</header>

    </>)
}