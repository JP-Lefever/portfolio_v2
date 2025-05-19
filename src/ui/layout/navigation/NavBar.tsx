import Link from "next/link";
import dataNav from "@/assets/locales/fr.json"
import styles from "./navBar.module.css"




export default function Navbar() {

    const data = dataNav.navbar
    
    return <>
    <nav className={styles.nav}>
    <h2 className={styles.h2}>LEFEVER Jean-Philippe</h2>
            <ul className={styles.ul} >
                {data.map((d) => (
                      <li key={d.id} className={styles.li}>
                    <Link className={styles.link} href={d.link}>{d.name}</Link>
                      </li>
        ))}
            </ul>
    <article>
        <button type={"button"}>Theme</button>
    </article>
    </nav>
    </>
}