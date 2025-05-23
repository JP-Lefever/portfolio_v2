
import {Oswald, Bebas_Neue} from "next/font/google";



export const titleFont = Bebas_Neue({
    weight : "400",
    subsets:["latin"],
    variable:"--title-font",
})

export const paragraphFont = Oswald({
    variable:"--paragraph-font",
    weight : "200",
    subsets:["latin"],
})