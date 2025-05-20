"use client"
import styles from "./buttons.module.css"
import {Menu, X} from "lucide-react"



export const BurgerMenu = ({isOpenMenu, setIsOpenMenuAction} : {isOpenMenu : boolean,setIsOpenMenuAction : ()=>void})=>{

    return(
        <>
        <section>
            {isOpenMenu ? <X  size={48} color={"#ffffff"} onClick={setIsOpenMenuAction}/> : <Menu color={"#ffffff"} size={48} onClick={setIsOpenMenuAction}/>}
        </section>
        </>
    )
}

export const ButtonFilterProject = ({typeOfProject, setFilterAction, filter} : {typeOfProject : string[], setFilterAction : (s:string)=>void, filter:string})=>{

    return (
        <>
            <section className={styles.sectionFilter}>
                <button className={filter === "" ? styles.active : styles.filterButton} onClick={()=>setFilterAction("all")} type={"button"}>Tous les projets</button>

                {typeOfProject.map((t)=>(

                    <button className={filter === t ? styles.active : styles.filterButton} onClick={()=>setFilterAction(t)} key={t} type={"button"}>{t}</button>
                ))}


            </section>

        </>
    )
}