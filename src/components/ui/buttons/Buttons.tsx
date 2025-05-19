"use client"

import {Menu, X} from "lucide-react"
import styles from "./buttons.module.css"


export const BurgerMenu = ({isOpenMenu, setIsOpenMenuAction} : {isOpenMenu : boolean,setIsOpenMenuAction : ()=>void})=>{


    return(
        <>
        <section>
            {isOpenMenu ? <X className={styles.close} size={48} color={"#ffffff"} onClick={setIsOpenMenuAction}/> : <Menu className={styles.open} color={"#ffffff"} size={48} onClick={setIsOpenMenuAction}/>}
        </section>
        </>
    )
}