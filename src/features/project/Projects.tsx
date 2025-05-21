"use client"
import {ProjectProps} from "@/types/definition";
import CardProject from "@/features/cardProject/CardProject"
import styles from "./projects.module.css"
import {ButtonFilterProject} from "@/components/ui/buttons/Buttons";
import {useState} from "react";
import {TransitionLinks2} from "@/components/ui/transitionLink/TransitionLink";
import { CircleX } from 'lucide-react';

export default function Projects({dataProject}: {dataProject: ProjectProps[]}) {


    const [filter, setFilter] = useState("")

    const typeOfProject = [...new Set(dataProject.map((d)=> d.type))]

    if(filter == "all"){
        setFilter("")
    }



    return (<>
        <section className={`${styles.section} js-section`}>
            <h2 className={styles.h2}>Réalisation</h2>
            <TransitionLinks2 className={styles.link} href={"/"} ><CircleX size={48} color={"#DDE2E4"}/></TransitionLinks2>
            <article>
                <ButtonFilterProject typeOfProject={typeOfProject} setFilterAction={setFilter} filter={filter} />
            </article>

            <article className={styles.sectionProject}>
                {dataProject
                    .filter((d)=> d.type.includes(filter))
                    .map((d)=> (<CardProject key ={d.id} dataProject = {d} />
                ))}

            </article>
            </section>
    </>)
}