import styles from "./about.module.css"
import {AboutProps} from "@/types/definition";
import {CircleX} from "lucide-react";
import {TransitionLinks2} from "@/components/ui/transitionLink/TransitionLink";
import Image from "next/image";

export default function About({dataInfo} : {dataInfo : AboutProps}){

    const {title, parcours, parcoursText, lectureTitle, bookOne, bookTwo, bookThree, playlistTitle,playlistOne, playlistTwo, playlistThree, playlistFour, playlistFive, hobbieTitle, sport, games, travel,} = dataInfo;

    return (<>
    <section className={`${styles.sectionAbout} js-section`}>
        <TransitionLinks2 className={styles.link} href={"/"} ><CircleX size={48} color={"#DDE2E4"}/></TransitionLinks2>
<article>

        <h2  className={styles.h2Head}>{title}</h2>
    <figure  className={styles.figure}>
        <Image  className={styles.image} src={"/images/about/jp.png"} alt={"JP Lefever"} fill={true} />
    </figure>
</article>

        <article>
            <h3 className={styles.h3}>{parcours}</h3>
            <section>

            <p>{parcoursText}</p>
            </section>
        </article>
        <article>
            <h3 className={styles.h3}>{lectureTitle}</h3>
            <section>

            <p>{bookOne}</p>
            <p>{bookTwo}</p>
            <p>{bookThree}</p>
            </section>
        </article>
        <article>
            <h3 className={styles.h3}>{playlistTitle}</h3>
            <section>

            <p>{playlistOne}</p>
            <p>{playlistTwo}</p>
            <p>{playlistThree}</p>
            <p>{playlistFour}</p>
            <p>{playlistFive}</p>
            </section>
        </article>
        <article>

            <h3 className={styles.h3}>{hobbieTitle}</h3>
            <section>

            <p>{sport}</p>
            <p>{travel}</p>
            <p>{games}</p>

            </section>
        </article>
    </section>

    </>)
}