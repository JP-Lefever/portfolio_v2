import data from "@/assets/locales/fr.json"
import About from "@/features/about/About";
import {PageTransition} from "@/components/ui/animation/Animation";

export default function AboutPage(){

    const dataAbout = data.about


    return(<>
        <PageTransition>
        <About dataInfo={dataAbout}/>
        </PageTransition>

    </>)
}