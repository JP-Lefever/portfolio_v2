import styles from "./cardCarousel.module.css"
import Image from "next/image";
import {CircleArrowRight} from "lucide-react";
import {ProjectProps} from "@/types/definition";


export default function CardCarousel({dataCard} : {dataCard : ProjectProps }) {

    const {name, image, type,  synopsis} = dataCard

    return(<>
        <section className={styles.sectionCard}>
            <article className={styles.articleImage}>
                <figure className={styles.figure}>
                    <Image className={styles.image} src={image} alt={name} fill={true} />
                </figure>
            </article>
            <article  className={styles.articleDesc}>
                <section className={styles.sectionLink}>
                    <p className={styles.type}>{type}</p>
                    <CircleArrowRight className={styles.arrow} size={48} />
                </section>
                <section className={styles.sectionInfo}>
                    <h2 className={styles.h2}>{name}</h2>
                    <p className={styles.syno}>{synopsis}</p>
                </section>
            </article>
        </section>



    </>)
}