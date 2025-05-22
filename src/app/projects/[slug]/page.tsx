
import ProjectDetails from "@/features/projectsDetails/ProjectDetails";
import {PageTransition} from "@/components/ui/animation/Animation";


export  default async function DetailProjectPage(props : {params: Promise<{ slug: string }>}){

    const params = await props.params
    const slug = params.slug

    return (<>
        <PageTransition>
            <ProjectDetails  slug={slug}  />
        </PageTransition>
    </>)
}