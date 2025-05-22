"use client"
import styles from "./technology.module.css"
import Image from "next/image"
import {useLanguage} from "@/context/LangContext";

export default function Technology() {

    const {data} = useLanguage()
    const {technology, titles} = data

    return (<>
        <section className={styles.tech}>

            <h2 className={styles.h2}>{titles.technoPage}</h2>

         <section className = {styles.sectionTech}>
        {technology.map((tech)=>(
            <article className={styles.articleTech} key={tech.id}>
                <Image className={styles.image} src={tech.image} alt={tech.label} width={1024} height={860} />
                <h2 className={styles.label}>{tech.label}</h2>
            </article>

        ))}
    </section>
        </section>


    </>)
}