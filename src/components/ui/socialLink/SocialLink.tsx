import styles from"./socialLink.module.css"
import Image from "next/image"

export default function SocialLink() {

    return (
        <section className={styles.link}>
            <a target="_blank" rel="noreferrer" href="https://x.com/LefR_dev">
                <Image className={styles.twitter} src={"/images/twitter.png"} alt="twitter" width={48} height={48}/>
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/jean-philippe-lefever/"
            >
                <Image className={styles.twitter} src={"/images/linkedin.png"} alt="twitter" width={48} height={48}/>
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JP-Lefever"
            >
                <Image className={styles.twitter} src={"/images/github.png"} alt="twitter" width={48} height={48}/>
            </a>
        </section>
    )
}