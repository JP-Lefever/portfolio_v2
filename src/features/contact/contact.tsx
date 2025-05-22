import styles from "./contact.module.css"
import {ContactProps} from "@/types/definition";
import {CircleX} from "lucide-react";
import {TransitionLinks2} from "@/components/ui/transitionLink/TransitionLink";
import SocialLink from "@/components/ui/socialLink/SocialLink";

export default function Contact({data} : {data : ContactProps}){

const {title, info, mail, tel, cv,social, download} = data
    return (<>
    <section className={`${styles.sectionContact} js-section`}>
            <TransitionLinks2 className={styles.link} href={"/"} ><CircleX size={48} color={"#DDE2E4"}/></TransitionLinks2>
        <article className={styles.articleHead}>
            <h2 className={styles.h2}>{title}</h2>
        </article>
        <article className={styles.article}>
            <h3 className={styles.h3}>{info}</h3>
            <section>
                <p>{mail}</p>
                <p>{tel}</p>
            </section>
        </article>
        <article className={styles.article}>
            <h3 className={styles.h3}>{social}</h3>

                <SocialLink/>

        </article>
        <article className={styles.article}>
            <h3 className={styles.h3}>{cv}</h3>
            <section>
                <a href={"/images/cv.pdf"} target={"_self"}   rel="noreferrer " download={true}>{download}</a>
            </section>
        </article>
    </section>
    </>)
}