"use client";
import { motion, } from "framer-motion";
import {ReactNode} from "react";



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