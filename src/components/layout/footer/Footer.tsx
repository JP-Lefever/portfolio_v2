import styles from "./footer.module.css"
import Image from "next/image"

export default function Footer() {

    return (<>
    <section className={styles.sectionFooter}>
        <article>
            <figure className={styles.figure}>
                <Image className={styles.image} src={"/images/header.png"} alt={"logo"} fill={true}/>
            </figure>
        </article>
        <article>
            <h2>Portfolio</h2>
            <p>LEFEVER Jean-Philippe</p>
            <p>lefever.jp@hotmail.fr</p>
        </article>
        <article>
        <p>Image from<a href={"https://www.pexels.com/fr-fr/"} target={"_blank"} rel={"noreferrer"}> Pexels</a></p>
        <p>Icons from<a href={"https://simpleicons.org/"} target={"_blank"} rel={"noreferrer"}> Simple Icons</a></p>
        <p>Animation with<a href={"https://motion.dev/"} target={"_blank"} rel={"noreferrer"}> Framer-Motion</a></p>
        <p>Carousel with<a href={"https://swiperjs.com/get-started"} target={"_blank"} rel={"noreferrer"}> Swiperjs</a></p>
        </article>
    </section>
    </>)
}