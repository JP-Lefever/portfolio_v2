"use client"
import {Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules"
import "swiper/css"
import CardCarousel from "@/features/cardCarousel/CardCarousel";
import styles from "./slider.module.css"
import {useLanguage} from "@/context/LangContext";


export const SliderProject = ()=>{

    const {data} = useLanguage()
    const {project} = data

    return (<>

        <Swiper
            className={styles.swiperProject}
            spaceBetween={80}
            slidesPerView={1.2}
            freeMode={true}
            speed={3000}
            loop={true}
            modules={[Autoplay]}
            autoplay={{delay: 0,  pauseOnMouseEnter: true}}
            breakpoints={{
                768: {
                    slidesPerView: 1.2,
                    spaceBetween: 120,
                },
                1080: {
                    slidesPerView: 4,
                    spaceBetween:120,
                },
                1480: {
                    slidesPerView: 6,
                    spaceBetween:260,
                },


                }}
        >

            {project.map((d)=>(
              <SwiperSlide className={styles.slide} key={d.id}> <CardCarousel dataCard ={d}/></SwiperSlide>
            ))}

        </Swiper>

    </>)
}