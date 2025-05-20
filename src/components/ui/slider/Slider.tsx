"use client"
import {Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules"
import "swiper/css"
import CardProject from "@/features/cardProject/CardProject";
import dataProject from "@/assets/locales/fr.json";
import styles from "./slider.module.css"


export const SliderProject = ()=>{

    const data = dataProject.project

    return (<>

        <Swiper
            className={styles.swiperProject}
            spaceBetween={60}
            slidesPerView={1.2}
            freeMode={true}
            speed={3000}
            loop={true}
            modules={[Autoplay]}
            autoplay={{delay: 0,  pauseOnMouseEnter: true}}
            breakpoints={{
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 260,
                    }
                }}
        >

            {data.map((d)=>(
              <SwiperSlide className={styles.slide} key={d.id}> <CardProject  dataCard ={d}/></SwiperSlide>
            ))}

        </Swiper>

    </>)
}