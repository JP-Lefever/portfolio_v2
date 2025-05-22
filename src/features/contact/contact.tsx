"use client"
import styles from "./contact.module.css"
import {CircleX} from "lucide-react";
import {TransitionLinks2} from "@/components/ui/transitionLink/TransitionLink";
import SocialLink from "@/components/ui/socialLink/SocialLink";
import {useLanguage} from "@/context/LangContext";

export default function Contact(){


    const {data} = useLanguage();
    const {contact} = data

    return (<>
    <section className={`${styles.sectionContact} js-section`}>
            <TransitionLinks2 className={styles.link} href={"/"} ><CircleX size={48} color={"#DDE2E4"}/></TransitionLinks2>
        <article className={styles.articleHead}>
            <h2 className={styles.h2}>{contact.title}</h2>
        </article>
        <article className={styles.article}>
            <h3 className={styles.h3}>{contact.info}</h3>
            <section>
                <p>{contact.mail}</p>
                <p>{contact.tel}</p>
            </section>
        </article>
        <article className={styles.article}>
            <h3 className={styles.h3}>{contact.social}</h3>

                <SocialLink/>

        </article>
        <article className={styles.article}>
            <h3 className={styles.h3}>{contact.cv}</h3>
            <section>
                <a href={"/images/cv.pdf"} target={"_self"}   rel="noreferrer " download={true}>{contact.download}</a>
            </section>
        </article>
    </section>
    </>)
}