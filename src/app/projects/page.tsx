import data from "@/assets/locales/fr.json"
import Projects from "@/features/project/Projects"

export default function ProjectsPage() {

const dataProject = data.project

    return (<>
        <Projects dataProject = {dataProject} />
    </>)
}