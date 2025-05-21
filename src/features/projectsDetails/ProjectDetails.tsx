import styles from "./projectDetail.module.css"
import {ProjectProps} from "@/types/definition";
import Image from "next/image";

export default function ProjectDetails({data, slug} : {data : ProjectProps[], slug: string}) {

    const project: ProjectProps[] = data.filter((d) => d.slug === slug)


    console.log(project)
    console.log(slug)

    return (<>

            {project.map((d: ProjectProps) => (

                <section key={d.id} className={styles.sectionProject}>
                    <article className={styles.articleHead}>
                        <figure className={styles.figureHead}>
                            <Image className={styles.imageHead} src={d.image} alt={d.name} fill={true}/>
                        </figure>
                        <h2 className={styles.h2}>{d.name}</h2>
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
                    <article className={styles.articleUi}>
                        <h3 className={styles.h3}>UI/UX</h3>
                        <section className={styles.sectionInfo}>
                        <figure className={styles.figureUi}>
                        <Image className={styles.imageUi} src={d.imageUi} alt={d.name} fill={true}/>
                        </figure>
                        <p className={styles.projectInfo}>{d.ui}</p>
                        </section>
                    </article>
                    <article>
                        <h3>Admin</h3>
                        <p>{d.admin}</p>
                        <figure className={styles.figure}>
                        <Image src={d.imageAdmin} alt={d.name} width={1080} height={860}/>
                        </figure >
                        <figure className={styles.figure}>
                        <Image src={d.imageAdmin1} alt={d.name} width={1080} height={860}/>
                        </figure>
                        <figure className={styles.figure}>
                        <Image src={d.imageAdmin2} alt={d.name} width={1080} height={860}/>
                        </figure>
                    </article>
                    <article>
                        <h3>Deploiement</h3>
                        <p>{d.deployment}</p>

                    </article>
                </section>
            ))

            }
        </>
    )
}