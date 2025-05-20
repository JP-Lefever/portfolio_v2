import styles from "./technology.module.css"
import dataTech from "@/assets/locales/fr.json"
import Image from "next/image"

export default function Technology() {

    const data = dataTech.technology

    return (<>
        <section className={styles.tech}>

            <h2 className={styles.h2}>Mes technos...</h2>

         <section className = {styles.sectionTech}>
        {data.map((tech)=>(
            <article className={styles.articleTech} key={tech.id}>
                <Image className={styles.image} src={tech.image} alt={tech.label} width={1024} height={860} />
                <h2 className={styles.label}>{tech.label}</h2>
            </article>

        ))}
    </section>
        </section>


    </>)
}