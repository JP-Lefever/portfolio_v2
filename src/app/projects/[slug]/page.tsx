import dataProject from "@/assets/locales/fr.json"
import ProjectDetails from "@/features/projectsDetails/ProjectDetails";
import {PageTransition} from "@/components/ui/animation/Animation";


export  default async function DetailProjectPage(props : {params: Promise<{ slug: string }>}){

    const params = await props.params
    const slug = params.slug

    const data = dataProject.project

    return (<>
        <PageTransition>

        <ProjectDetails data = {data} slug={slug}/>
        </PageTransition>
    </>)
}