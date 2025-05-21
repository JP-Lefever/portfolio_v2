import styles from "./projectDetail.module.css"
import {ProjectProps} from "@/types/definition";
import Image from "next/image";
import {CircleX} from "lucide-react";
import {TransitionLinks} from "@/components/ui/transitionLink/TransitionLink";
import {ButtonSite} from "@/components/ui/buttons/Buttons";

export default function ProjectDetails({data, slug} : {data : ProjectProps[], slug: string}) {

    const project: ProjectProps[] = data.filter((d) => d.slug === slug)


    return (<>

            {project.map((d: ProjectProps) => (

                <section key={d.id} className={styles.sectionProject}>
                    <TransitionLinks className={styles.link} href={"/projects"} ><CircleX size={48} color={"#DDE2E4"}/></TransitionLinks>
                    <article className={styles.articleHead}>
                        <figure className={styles.figureHead}>
                            <Image className={styles.imageHead} src={d.image} alt={d.name} fill={true}/>
                        </figure>
                        <section className={styles.sectionLink}>
                        <h2 className={styles.h2}>{d.name}</h2>
                        <ButtonSite web={d.web} git={d.git}/>
                        </section>
                    </article>
                    <article className={styles.articleProject}>
                        <h3 className={styles.h3}>Le projet</h3>
                        <section className={styles.sectionInfo}>
                        <figure className={styles.figureProject}>
                        <Image className={styles.imageProject} src={d.imageProject} alt={d.name} fill={true}/>
                        </figure>
                        <p className={styles.projectInfo}>{d.project}</p>
                        </section>
                    </article>
                    {d.ui &&
                    <article className={styles.articleUi}>
                        <h3 className={styles.h3}>UI/UX</h3>
                        <section className={styles.sectionInfo}>
                        <figure className={styles.figureUi}>
                        <Image className={styles.imageUi} src={d.imageUi} alt={d.name} fill={true}/>
                        </figure>
                        <p className={styles.projectInfo}>{d.ui}</p>
                        </section>
                    </article>
                    }
                    {d.admin &&
                    <article className={styles.articleAdmin}>
                        <h3 className={styles.h3}>Admin</h3>
                        <section className={styles.sectionAdmin}>
                            <div className={styles.div}>
                        <p className={styles.projectInfo}>{d.admin}</p>
                            </div>
                            <div className={styles.div}>
                        <figure className={styles.figureAdmin}>
                        <Image className={styles.imageAdmin} src={d.imageAdmin} alt={d.name} fill={ true}/>
                        </figure >
                            </div>
                            <div className={styles.div}>
                        <figure className={styles.figureAdmin}>
                        <Image className={styles.imageAdmin} src={d.imageAdmin1} alt={d.name} fill={ true}/>
                        </figure>
                            </div>
                                <div className={styles.div}>
                        <figure className={styles.figureAdmin}>
                        <Image className={styles.imageAdmin} src={d.imageAdmin2} alt={d.name} fill={ true}/>
                        </figure>
                                </div>
                        </section>

                    </article>
                    }
                    <article className={styles.articleTech}>
                        <h3 className={styles.h3}>Technologies utilisées</h3>
                        <section className={styles.sectionTech}>
                        {d.techno?.map((tech)=>(
                        <p key={tech} className={styles.projectTech}>{tech}</p>
                        ))}
                        </section>

                    </article>
                </section>
            ))

            }
        </>
    )
}