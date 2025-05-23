import styles from "./footer.module.css"
import SocialLink from "@/components/ui/socialLink/SocialLink";

export default function Footer() {

    return (<>
    <section className={styles.sectionFooter}>
        <article className={styles.socialLink}>
                <SocialLink/>
        </article>

        <article>
            <h2>Portfolio</h2>
            <p>LEFEVER Jean-Philippe</p>
            <p>lefever.jp@hotmail.fr</p>
        </article>
        <article>
        <p>Image from<a href={"https://www.pexels.com/fr-fr/"} target={"_blank"} rel={"noreferrer"}> Pexels</a></p>
        <p>Icons from<a href={"https://simpleicons.org/"} target={"_blank"} rel={"noreferrer"}> Simple Icons</a></p>
        </article>

    </section>
    </>)
}