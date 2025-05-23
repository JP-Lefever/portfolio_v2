"use client";
import {motion, useInView,} from "framer-motion";
import {ReactNode, useRef} from "react";



export const PageTransition = ({ children }: { children: ReactNode }) => {

    const variants = {
        hidden: { opacity: 0, y: 200},
        enter: { opacity: 1, y: 0 },

    }


    return (

            <motion.div
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {children}
            </motion.div>

    );
};

export const PageTransition2 = ({ children }: { children: ReactNode }) => {

    const variants = {
        hidden: { opacity: 0, },
        enter: { opacity: 1, },

    }

    return (

        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {children}
        </motion.div>

    );
};

export const ScrollInView = ({ children}: { children: ReactNode }) => {

    const ref= useRef(null);
    const isInView = useInView(ref, {once:true, amount:0.2});

    const variants = {
        hidden: { opacity: 0, y: 40},
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.div ref={ref} variants={variants}  initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ duration: 1, ease: "easeOut" }}>{children}</motion.div>
    )
}