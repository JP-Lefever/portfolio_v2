import data from "@/assets/locales/fr.json"
import Projects from "@/features/project/Projects"
import {PageTransition} from "@/components/ui/animation/Animation";


export default function ProjectsPage() {

const dataProject = data.project

    return (<>


<PageTransition>
        <Projects dataProject = {dataProject} />
</PageTransition>



    </>)
}