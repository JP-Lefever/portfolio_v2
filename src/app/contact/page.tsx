import data from "@/assets/locales/fr.json"
import Contact from "@/features/contact/contact"
import {PageTransition} from "@/components/ui/animation/Animation";

export default function  contactPage (){

    const dataContact = data.contact
    return (<>

    <PageTransition>

        <Contact data={dataContact} />
    </PageTransition>
    </>)
}