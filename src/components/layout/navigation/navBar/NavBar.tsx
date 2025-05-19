"use client"
import Link from "next/link";
import dataNav from "@/assets/locales/fr.json"
import styles from "./navBar.module.css"
import {BurgerMenu} from "@/components/ui/buttons/Buttons";
import {useState} from "react";
import { Languages } from 'lucide-react'





export default function Navbar() {

    const data = dataNav.navbar
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const handleClickOpenMenu = ()=>{
        setIsOpenMenu(!isOpenMenu)
    }
    
    return <>
        <nav className={styles.nav}>
            <section className={styles.navItem}>
                <Link  href={"/"} className={styles.logo}>LEFEVER<br/> Jean-Philippe</Link>

                <article className={styles.burger}>
                    <BurgerMenu isOpenMenu={isOpenMenu} setIsOpenMenuAction = {handleClickOpenMenu}/>
                </article>
            </section>

            <article className={`${styles.menu} ${isOpenMenu ? styles.menuOpen : styles.menuClosed}`}>
                <ul className={styles.ul}>
                            {data.map((d) => (
                                <li key={d.id} className={styles.li}>
                                    <Link className={styles.link} href={d.link}>{d.name}</Link>
                                </li>
                            ))}
                </ul>
                <article className={styles.contextMobile}>
                    <Languages color={"#ffffff"}/>
                </article>
            </article>

            <article className={styles.context}>
                <Languages color={"#ffffff"}/>
            </article>

        </nav>
    </>
}