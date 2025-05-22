"use client"
import styles from "./header.module.css"
import PixelParticle from "@/components/ui/animation/PixelParticule";
import {useLanguage} from "@/context/LangContext";

export default function Header() {

    const {data} = useLanguage();
    const {header} = data

    return(<>
<header className={styles.header}>

    <section className = {styles.title}>
        <div className={styles.particle}>
            {Array.from({ length: 80 }).map((_, i) => (
                <PixelParticle key={i} />
            ))}
        </div>
        <h1 className={styles.typing}>{header.title} <span className={styles.sub}>{header.subTitle}</span> <span className={styles.subTitle}>{header.exp}</span></h1>
    </section>
</header>

    </>)
}