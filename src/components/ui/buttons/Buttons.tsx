"use client"
import styles from "./buttons.module.css"
import {Menu, Globe, X, } from "lucide-react"



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

export const ButtonSite = ({web, git} : {web : string, git:string})=>{


    return (<>
        <section className={styles.sectionSite}>
            {web !== "" &&
            <a  href={web} target="_blank" rel="noopener noreferrer"><Globe className={styles.web} size={48} color={"#ffffff"}/></a>
            }
            <a  href={git} target="_blank" rel="noopener noreferrer">
                <svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                     stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className={styles.git}>
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
            </a>
        </section>
    </>)
}