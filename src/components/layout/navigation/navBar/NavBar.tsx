"use client"
import styles from "./navBar.module.css"
import {BurgerMenu} from "@/components/ui/buttons/Buttons";
import {useState} from "react";
import { Languages } from 'lucide-react'
import {TransitionLinks} from "@/components/ui/transitionLink/TransitionLink";
import {useLanguage} from "@/context/LangContext";


export default function Navbar() {


    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const handleClickOpenMenu = ()=>{
        setIsOpenMenu(!isOpenMenu)
    }

    const {language,setLanguage, data} = useLanguage();
    const toggleLanguage = () => {
        setLanguage(language === "fr" ? "en" : "fr");
    }

    const {navbar} = data
    
    return <>
        <nav className={styles.nav}>
            <section className={styles.navItem}>
                <TransitionLinks  href={"/"} className={styles.logo}>LEFEVER<br/> Jean-Philippe</TransitionLinks>

                <article className={styles.burger}>
                    <BurgerMenu isOpenMenu={isOpenMenu} setIsOpenMenuAction = {handleClickOpenMenu}/>
                </article>
            </section>

            <article className={`${styles.menu} ${isOpenMenu ? styles.menuOpen : styles.menuClosed}`}>
                <ul className={styles.ul}>
                            {navbar.map((d) => (
                                <li key={d.id} className={styles.li}>
                                    <TransitionLinks onClick={handleClickOpenMenu} className={styles.link} href={d.link}>{d.name}</TransitionLinks>
                                </li>
                            ))}
                </ul>
                <article className={styles.contextMobile}>
                    <button className={styles.button} type={"button"} onClick={toggleLanguage}>
                        <Languages className={language === "fr" ? styles.fr : styles.en}/>
                    </button>
                </article>
            </article>

            <article className={styles.context}>
                <button className={styles.button} type={"button"} onClick={toggleLanguage}>
                <Languages className={language === "fr" ? styles.fr : styles.en} size={36}/>
                </button>
            </article>

        </nav>
    </>
}