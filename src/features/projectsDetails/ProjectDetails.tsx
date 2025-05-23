"use client"
import styles from "./projectDetail.module.css"
import {ProjectProps} from "@/types/definition";
import Image from "next/image";
import {CircleX} from "lucide-react";
import {TransitionLinks} from "@/components/ui/transitionLink/TransitionLink";
import {ButtonSite} from "@/components/ui/buttons/Buttons";
import {useLanguage} from "@/context/LangContext";
import { ScrollInView } from "@/components/ui/animation/Animation";

export default function ProjectDetails({slug} : {slug: string}) {

    const {data} = useLanguage()
    const {project} = data
    const {titles} = data

    const projectSlug: ProjectProps[] = project.filter((d) => d.slug === slug)



    return (<>

            {projectSlug.map((d: ProjectProps) => (

                <section key={d.id} className={styles.sectionProject}>
                    <TransitionLinks className={styles.link} href={"/projects"} ><CircleX size={48} color={"#DDE2E4"}/></TransitionLinks>
                <ScrollInView>
                    <article className={styles.articleHead}>
                        <figure className={styles.figureHead}>
                            <Image className={styles.imageHead} src={d.image} alt={d.name} fill={true}/>
                        </figure>

                        <section className={styles.sectionLink}>
                            <div>
                            <h2 className={styles.h2}>{d.name}</h2>
                            <p className={styles.status}>{d.status === "Projet en cours" || d.status === "In progress" ?  d.status : ""}</p>
                            </div>
                        <ButtonSite web={d.web} git={d.git}/>
                        </section>
                    </article>
                </ScrollInView>
                    <ScrollInView>
                    <article className={styles.articleProject}>
                        <h3 className={styles.h3}>{titles.projectDetail}</h3>
                        <section className={styles.sectionInfo}>
                        <figure className={styles.figureProject}>
                        <Image className={styles.imageProject} src={d.imageProject} alt={d.name} fill={true}/>
                        </figure>
                        <p className={styles.projectInfo}>{d.project}</p>
                        </section>
                    </article>
                    </ScrollInView>
                    <ScrollInView>
                    {d.ui &&
                    <article className={styles.articleUi}>
                        <h3 className={styles.h3}>{titles.ui}</h3>
                        <section className={styles.sectionInfo}>
                        <figure className={styles.figureUi}>
                            {d.imageUi &&
                        <Image className={styles.imageUi} src={d.imageUi} alt={d.name} fill={true}/>
                            }
                        </figure>
                        <p className={styles.projectInfo}>{d.ui}</p>
                        </section>
                    </article>
                    }
                    </ScrollInView>
                    <ScrollInView>
                    {d.admin &&
                    <article className={styles.articleAdmin}>
                        <h3 className={styles.h3}>{titles.admin}</h3>
                        <section className={styles.sectionAdmin}>
                            <div className={styles.div}>
                        <p className={styles.projectInfo}>{d.admin}</p>
                            </div>
                            <div className={styles.div}>
                        <figure className={styles.figureAdmin}>
                            {d.imageAdmin &&
                        <Image className={styles.imageAdmin} src={d.imageAdmin} alt={d.name} fill={ true}/>
                            }
                        </figure >
                            </div>
                            <div className={styles.div}>
                        <figure className={styles.figureAdmin}>
                            {d.imageAdmin1 &&
                        <Image className={styles.imageAdmin} src={d.imageAdmin1} alt={d.name} fill={ true}/>
                            }
                        </figure>
                            </div>
                                <div className={styles.div}>
                        <figure className={styles.figureAdmin}>
                            {d.imageAdmin2 &&
                        <Image className={styles.imageAdmin} src={d.imageAdmin2} alt={d.name} fill={ true}/>
                            }
                        </figure>
                                </div>
                        </section>

                    </article>
                    }
                    </ScrollInView>
                <ScrollInView>
                    <article className={styles.articleTech}>
                        <h3 className={styles.h3}>{titles.techno}</h3>
                        <section className={styles.sectionTech}>
                        {d.techno?.map((tech)=>(
                        <p key={tech} className={styles.projectTech}>{tech}</p>
                        ))}
                        </section>

                    </article>
                </ScrollInView>
                </section>
            ))

            }
        </>
    )
}