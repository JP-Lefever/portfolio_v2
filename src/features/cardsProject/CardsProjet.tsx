import styles from "./cardsProject.module.css"
import dataProject from "@/assets/locales/fr.json"

import CardProject from "@/features/cardProject/CardProject";


export default function CardsProject() {

    const data = dataProject.project

    return(<>
    <section className = {styles.sectionCards}>
        {data.map((d)=>(
          <CardProject key={d.id} dataCard ={d}/>
        ))}

    </section>


    </>)
}