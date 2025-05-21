"use client"
import {ProjectProps} from "@/types/definition";
import styles from "./cardProject.module.css"
import Image from "next/image";
import {CircleArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";
import {TransitionLinks} from "@/components/ui/transitionLink/TransitionLink";

export default function CardProject({dataProject}: {dataProject: ProjectProps}) {

            const {name, image, type,  synopsis, slug} = dataProject
                const router = useRouter()

    const handleClickOpenCard = () => {

                router.push(`/projects/${slug}`)
    }

    return (<>


            <TransitionLinks href={`/projects/${slug}`} className={styles.sectionCard}>
                <article>
                    <figure className={styles.figure}>
                        <Image className={styles.image} src={image} alt={name} fill={true} />
                    </figure>
                </article>

                    <article className={styles.sectionLink}>
                        <p className={styles.type}>{type}</p>
                        <CircleArrowRight className={styles.arrow} size={48} />
                    </article>
                    <article className={styles.sectionInfo}>
                        <h2 className={styles.h2}>{name}</h2>
                        <p className={styles.syno}>{synopsis}</p>
                    </article>

            </TransitionLinks>
        </>
    )
}