"use client"

import {Menu, X} from "lucide-react"


export const BurgerMenu = ({isOpenMenu, setIsOpenMenuAction} : {isOpenMenu : boolean,setIsOpenMenuAction : ()=>void})=>{

    return(
        <>
        <section>
            {isOpenMenu ? <X  size={48} color={"#ffffff"} onClick={setIsOpenMenuAction}/> : <Menu color={"#ffffff"} size={48} onClick={setIsOpenMenuAction}/>}
        </section>
        </>
    )
}