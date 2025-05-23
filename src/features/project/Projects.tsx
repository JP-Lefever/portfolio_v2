"use client"

import CardProject from "@/features/cardProject/CardProject"
import styles from "./projects.module.css"
import {ButtonFilterProject} from "@/components/ui/buttons/Buttons";
import {useState} from "react";
import {TransitionLinks2} from "@/components/ui/transitionLink/TransitionLink";
import { CircleX } from 'lucide-react';
import {useLanguage} from "@/context/LangContext";

export default function Projects() {


    const [filter, setFilter] = useState("")
    const {data} = useLanguage()
    const {titles} = data
    const {project} = data

    const typeOfProject = [...new Set(project.map((d)=> d.filter))]

    if(filter == "all"){
        setFilter("")
    }



    return (<>
        <section className={`${styles.section} js-section`}>
            <h2 className={styles.h2}>{titles.project}</h2>
            <TransitionLinks2 className={styles.link} href={"/"} ><CircleX size={48} color={"#DDE2E4"}/></TransitionLinks2>
            <article>
                <ButtonFilterProject typeOfProject={typeOfProject} setFilterAction={setFilter} filter={filter}/>
            </article>

            <article className={styles.sectionProject}>
                {project
                    .filter((d)=> d.filter.includes(filter))
                    .map((d)=> (<CardProject key ={d.id} dataProject = {d} />
                ))}

            </article>
            </section>
    </>)
}