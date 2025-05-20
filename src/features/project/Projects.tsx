"use client"
import {ProjectProps} from "@/types/definition";
import CardProject from "@/features/cardProject/CardProject"
import styles from "./projects.module.css"
import {ButtonFilterProject} from "@/components/ui/buttons/Buttons";
import {useState} from "react";

export default function Projects({dataProject}: {dataProject: ProjectProps[]}) {


    const [filter, setFilter] = useState("")

    const typeOfProject = [...new Set(dataProject.map((d)=> d.type))]

    if(filter == "all"){
        return setFilter("")
    }


    return (<>
        <section className={styles.section}>
            <h2 className={styles.h2}>Réalisation</h2>
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