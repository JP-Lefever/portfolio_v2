"use client"
import Link, {LinkProps} from "next/link";
import React, {ReactNode} from "react";
import {useRouter} from "next/navigation";


 interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
    className?: string;
}

export const TransitionLinks= ({children, href, className, ...props} : TransitionLinkProps)=>{

    const router = useRouter()
    function sleep(ms: number) : Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        e.preventDefault();

        const body = document.querySelector("body");
        body?.classList.add("page-transition");

        await sleep(500)

        router.push(href)

        await sleep(500)

        body?.classList.remove("page-transition")
    }



    return (
        <Link onClick={handleTransition} href={href} className={className} {...props}>{children}</Link>
    )
}

export const TransitionLinks2= ({children, href, className, ...props} : TransitionLinkProps)=>{

    const router = useRouter()
    function sleep(ms: number) : Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        e.preventDefault();

        const section = document.querySelector(".js-section");

        section?.classList.add("section-transition");

        await sleep(700);
        router.push(href)

    }



    return (
        <Link onClick={handleTransition} href={href} className={className} {...props}>{children}</Link>
    )
}