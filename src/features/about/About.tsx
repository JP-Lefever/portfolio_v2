"use client"
import styles from "./about.module.css"
import {CircleX} from "lucide-react";
import {TransitionLinks2} from "@/components/ui/transitionLink/TransitionLink";
import Image from "next/image";
import {useLanguage} from "@/context/LangContext";
import {useState} from "react";
import {ScrollInView} from "@/components/ui/animation/Animation";

export default function About(){

    const {data} = useLanguage();
    const {about} = data
    const {titles} =data

    const [fullText, setFullText] = useState(false);

    const handleChange = () => setFullText(!fullText)

    return (<>
    <section className={`${styles.sectionAbout} js-section`}>
        <TransitionLinks2 className={styles.link} href={"/"} ><CircleX size={48} color={"#DDE2E4"}/></TransitionLinks2>
        <ScrollInView>
            <article className={styles.articleFirst}>

                    <h2  className={styles.h2Head}>{about.title}</h2>
                <figure  className={styles.figure}>
                    <Image  className={styles.image} src={"/images/about/jp.png"} alt={"JP Lefever"} fill={true} />
                </figure>
            </article>
        </ScrollInView>
            <ScrollInView>
        <article>
            <h3 className={styles.h3}>{about.parcours}</h3>
            <section>

            <p>{about.parcoursText}</p>
                {fullText &&
                <p>{about.fullText}</p>
                }
                <button className={styles.buttonCarreer} type={"button"} onClick={handleChange}>{fullText ? `${titles.less}` : `${titles.more}`}</button>
            </section>
        </article>
            </ScrollInView>
        <ScrollInView>
        <article>
            <h3 className={styles.h3}>{about.lectureTitle}</h3>
            <section>

            <p>{about.bookOne}</p>
            <p>{about.bookTwo}</p>
            <p>{about.bookThree}</p>
            </section>
        </article>
        </ScrollInView>
        <ScrollInView>
        <article>
            <h3 className={styles.h3}>{about.playlistTitle}</h3>
            <section>

            <p>{about.playlistOne}</p>
            <p>{about.playlistTwo}</p>
            <p>{about.playlistThree}</p>
            <p>{about.playlistFour}</p>
            <p>{about.playlistFive}</p>
            </section>
        </article>
        </ScrollInView>
        <article>

            <h3 className={styles.h3}>{about.hobbieTitle}</h3>
            <section>

            <p>{about.sport}</p>
            <p>{about.travel}</p>
            <p>{about.games}</p>

            </section>
        </article>
    </section>

    </>)
}