
import {Oswald, Bebas_Neue, Anton} from "next/font/google";


export const titleFont = Anton({
    variable:"--title-font",
    weight : "400",
    subsets:["latin"],
})

export const paragraphFont = Bebas_Neue({
    variable:"--paragraph-font",
    weight : "400",
    subsets:["latin"],
})

export const paragraphFont2 = Oswald({
    variable:"--para-font",
    weight : "200",
    subsets:["latin"],
})